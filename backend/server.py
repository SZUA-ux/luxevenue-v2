from fastapi import FastAPI, APIRouter, Request, HTTPException
from fastapi.responses import Response, StreamingResponse, JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Dict, Any, Optional
import uuid
from datetime import datetime, timezone, timedelta
import httpx
from simple_pdf import generate_booking_pdf_html
from email_templates import get_booking_confirmation_email, get_booking_reminder_email
import jwt
import bcrypt


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# JWT Configuration
JWT_SECRET = os.environ.get('JWT_SECRET', 'fallback-secret-key-change-in-production')
JWT_ALGORITHM = 'HS256'
COOKIE_NAME = 'luxe_crm_session'

# Auth Models
class LoginRequest(BaseModel):
    username: str
    password: str

class UserResponse(BaseModel):
    id: str
    username: str
    email: str
    role: str

# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Auth Helper Functions
def create_jwt_token(user_data: dict) -> str:
    """Create JWT token"""
    payload = {
        'userId': user_data['id'],
        'email': user_data['email'],
        'username': user_data['username'],
        'role': user_data['role'],
        'exp': datetime.now(timezone.utc) + timedelta(days=7)
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

def verify_jwt_token(token: str) -> Optional[dict]:
    """Verify JWT token"""
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None

# Auth Routes
@api_router.post("/auth/login")
async def login(request: LoginRequest):
    """Login endpoint - verify credentials and return JWT"""
    try:
        logging.info(f"Login attempt for username: {request.username}")
        
        # Get users collection
        users_collection = db['users']
        
        # Find user by username (case-insensitive)
        user = await users_collection.find_one({'username': request.username.lower()})
        
        if not user:
            logging.warning(f"User not found: {request.username}")
            return JSONResponse(
                status_code=401,
                content={'success': False, 'error': 'Invalid username or password'}
            )
        
        logging.info(f"User found: {user['username']}")
        
        # Verify password using bcrypt
        import bcrypt as bcrypt_lib
        password_bytes = request.password.encode('utf-8')
        hash_bytes = user['password'].encode('utf-8')
        
        is_valid = bcrypt_lib.checkpw(password_bytes, hash_bytes)
        logging.info(f"Password valid: {is_valid}")
        
        if not is_valid:
            logging.warning(f"Invalid password for user: {request.username}")
            return JSONResponse(
                status_code=401,
                content={'success': False, 'error': 'Invalid username or password'}
            )
        
        # Create JWT token
        token = create_jwt_token({
            'id': user.get('id', str(user['_id'])),
            'username': user['username'],
            'email': user['email'],
            'role': user['role']
        })
        
        # Create response
        response = JSONResponse(
            content={
                'success': True,
                'user': {
                    'id': user.get('id', str(user['_id'])),
                    'username': user['username'],
                    'email': user['email'],
                    'role': user['role']
                }
            }
        )
        
        # Set cookie
        is_production = os.environ.get('NODE_ENV') == 'production'
        response.set_cookie(
            key=COOKIE_NAME,
            value=token,
            httponly=True,
            secure=is_production,
            samesite='lax',
            max_age=7 * 24 * 60 * 60,  # 7 days
            path='/'
        )
        
        return response
        
    except Exception as e:
        logging.error(f"Login error: {e}")
        return JSONResponse(
            status_code=500,
            content={'success': False, 'error': 'Internal server error'}
        )

@api_router.post("/auth/logout")
async def logout():
    """Logout endpoint - clear session cookie"""
    response = JSONResponse(content={'success': True})
    response.delete_cookie(key=COOKIE_NAME, path='/')
    return response

@api_router.get("/auth/me")
async def get_current_user(request: Request):
    """Get current authenticated user"""
    token = request.cookies.get(COOKIE_NAME)
    
    if not token:
        return JSONResponse(
            status_code=401,
            content={'success': False, 'error': 'Not authenticated'}
        )
    
    payload = verify_jwt_token(token)
    
    if not payload:
        return JSONResponse(
            status_code=401,
            content={'success': False, 'error': 'Invalid or expired token'}
        )
    
    return JSONResponse(
        content={
            'success': True,
            'user': {
                'userId': payload['userId'],
                'email': payload['email'],
                'username': payload['username'],
                'role': payload['role']
            }
        }
    )

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Proxy handler for Next.js API routes
@app.api_route("/api/venue-leads{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH"])
@app.api_route("/api/catering-leads{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH"])
@app.api_route("/api/hire-leads{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH"])
@app.api_route("/api/blog{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH"])
@app.api_route("/api/health{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH"])
@app.api_route("/api/seo{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH"])
async def proxy_to_nextjs(request: Request, path: str = ""):
    """
    Proxy requests to Next.js API routes.
    This is necessary because Kubernetes ingress routes all /api/* to FastAPI,
    but CRM endpoints are Next.js API routes that need to be handled by Next.js server.
    """
    # Construct the Next.js server URL (running on localhost:3000)
    nextjs_url = f"http://localhost:3000{request.url.path}"
    if request.url.query:
        nextjs_url += f"?{request.url.query}"
    
    # Forward the request to Next.js
    async with httpx.AsyncClient() as client:
        try:
            # Get request body if present
            body = await request.body()
            
            # Forward headers (excluding host)
            headers = dict(request.headers)
            headers.pop('host', None)
            
            # Make the request to Next.js
            response = await client.request(
                method=request.method,
                url=nextjs_url,
                content=body,
                headers=headers,
                timeout=30.0
            )
            
            # Return the response from Next.js
            return Response(
                content=response.content,
                status_code=response.status_code,
                headers=dict(response.headers),
                media_type=response.headers.get('content-type')
            )
        except Exception as e:
            logger.error(f"Error proxying request to Next.js: {e}")
            return Response(
                content=f'{{"error": "Failed to proxy request to Next.js: {str(e)}"}}',
                status_code=502,
                media_type="application/json"
            )

@api_router.post("/bookings/create-direct")
async def create_direct_booking(request: Request):
    """
    Create a booking directly without converting from a lead
    For walk-in customers, phone bookings, etc.
    """
    try:
        body = await request.json()
        
        # Validate required fields
        required_fields = ['clientName', 'clientEmail', 'eventType', 'date', 'bookingType']
        for field in required_fields:
            if not body.get(field):
                return {"success": False, "error": f"Missing required field: {field}"}
        
        # Create booking via Next.js API
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "http://localhost:3000/api/bookings/create-direct",
                json=body,
                timeout=10.0
            )
            
            if response.status_code == 200:
                return response.json()
            else:
                return {"success": False, "error": "Failed to create booking"}
                
    except Exception as e:
        logger.error(f"Error creating direct booking: {e}")
        return {"success": False, "error": str(e)}


# ==================== PDF & EMAIL ENDPOINTS ====================

@api_router.post("/bookings/{booking_id}/pdf")
async def generate_booking_pdf_endpoint(booking_id: str):
    """
    Generate PDF for a booking using simple HTML to PDF
    """
    try:
        # Get booking from Next.js API
        async with httpx.AsyncClient() as client:
            response = await client.get(
                f"http://localhost:3000/api/bookings/{booking_id}",
                timeout=10.0
            )
            
            if response.status_code != 200:
                return Response(
                    content='{"error": "Booking not found"}',
                    status_code=404,
                    media_type="application/json"
                )
            
            booking_data = response.json()
        
        # Get date for filename
        from datetime import datetime
        date_obj = booking_data.get('date', '')
        if isinstance(date_obj, str):
            try:
                date_obj = datetime.fromisoformat(date_obj.replace('Z', '+00:00'))
                booking_date = date_obj.strftime('%d_%B_%Y')
            except:
                booking_date = 'Booking'
        else:
            booking_date = 'Booking'
        
        # Generate PDF
        pdf_buffer = generate_booking_pdf_html(booking_data)
        
        # Use client name for filename
        client_name = booking_data.get('clientName', 'Booking')
        # Clean filename (remove special characters)
        safe_filename = "".join(c for c in client_name if c.isalnum() or c in (' ', '-', '_')).strip()
        safe_filename = safe_filename.replace(' ', '_')
        
        return StreamingResponse(
            pdf_buffer,
            media_type="application/pdf",
            headers={
                "Content-Disposition": f"attachment; filename={safe_filename}_{booking_date.replace(' ', '_')}.pdf"
            }
        )
    except Exception as e:
        logger.error(f"Error generating PDF: {e}")
        import traceback
        traceback.print_exc()
        return Response(
            content=f'{{"error": "Failed to generate PDF: {str(e)}"}}',
            status_code=500,
            media_type="application/json"
        )

@api_router.post("/bookings/{booking_id}/email")
async def send_booking_email(booking_id: str, request: Request):
    """
    Send booking confirmation email - Proxy to Next.js
    """
    try:
        body = await request.json()
        
        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"http://localhost:3000/api/bookings/{booking_id}/email",
                json=body,
                timeout=30.0
            )
            
            return response.json()
    except Exception as e:
        logger.error(f"Error sending email: {e}")
        return {"success": False, "error": str(e)}

@api_router.get("/bookings/{booking_id}/email-preview")
async def preview_booking_email(booking_id: str, email_type: str = 'confirmation'):
    """
    Preview email HTML (for testing)
    """
    try:
        # Get booking from database (proxy to Next.js)
        async with httpx.AsyncClient() as client:
            response = await client.get(
                f"http://localhost:3000/api/bookings/{booking_id}",
                timeout=10.0
            )
            if response.status_code != 200:
                return Response(
                    content='{"error": "Booking not found"}',
                    status_code=404,
                    media_type="application/json"
                )
            
            booking_data = response.json()
        
        # Generate email HTML
        if email_type == 'reminder':
            email_html = get_booking_reminder_email(booking_data)
        else:
            email_html = get_booking_confirmation_email(booking_data)
        
        return Response(
            content=email_html,
            media_type="text/html"
        )
    except Exception as e:
        logger.error(f"Error generating email preview: {e}")
        return Response(
            content=f'<h1>Error: {str(e)}</h1>',
            status_code=500,
            media_type="text/html"
        )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()