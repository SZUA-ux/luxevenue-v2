from datetime import datetime
import os

def get_booking_confirmation_email(booking_data):
    """
    Generate professional HTML email template for booking confirmation
    """
    total_amount = float(booking_data.get('totalAmount', 0))
    discount = float(booking_data.get('discount', 0))
    paid_amount = float(booking_data.get('paidAmount', 0))
    balance_due = total_amount - discount - paid_amount
    
    event_date = booking_data.get('date', 'N/A')
    if isinstance(event_date, str) and 'T' in event_date:
        event_date = event_date.split('T')[0]
    
    html = f'''
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {{
            font-family: 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            background-color: #f3f4f6;
        }}
        .container {{
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 20px;
        }}
        .content {{
            background: white;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }}
        .header {{
            text-align: center;
            margin-bottom: 30px;
        }}
        .logo {{
            font-size: 32px;
            font-weight: bold;
            color: #6B21A8;
            margin-bottom: 10px;
        }}
        .title {{
            font-size: 24px;
            color: #9333EA;
            margin-bottom: 20px;
        }}
        .section {{
            margin-bottom: 25px;
        }}
        .section-title {{
            font-size: 18px;
            font-weight: bold;
            color: #6B21A8;
            margin-bottom: 15px;
            border-bottom: 2px solid #E9D5FF;
            padding-bottom: 8px;
        }}
        .info-row {{
            display: flex;
            padding: 10px 0;
            border-bottom: 1px solid #f3f4f6;
        }}
        .info-label {{
            font-weight: bold;
            width: 150px;
            color: #6B7280;
        }}
        .info-value {{
            flex: 1;
            color: #111827;
        }}
        .highlight-box {{
            background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #F59E0B;
            margin: 20px 0;
        }}
        .balance-amount {{
            font-size: 28px;
            font-weight: bold;
            color: #DC2626;
        }}
        .button {{
            display: inline-block;
            background: linear-gradient(135deg, #9333EA 0%, #6B21A8 100%);
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            margin: 20px 0;
        }}
        .footer {{
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #E9D5FF;
            color: #6B7280;
            font-size: 12px;
        }}
        .status-badge {{
            display: inline-block;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
        }}
        .status-confirmed {{
            background: #10B981;
            color: white;
        }}
        .status-tentative {{
            background: #F59E0B;
            color: white;
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="content">
            <div class="header">
                <div class="logo">LUXE VENUE</div>
                <div class="title">Booking Confirmation</div>
                <span class="status-badge status-{booking_data.get('status', 'tentative')}">
                    {booking_data.get('status', 'tentative').upper()}
                </span>
            </div>
            
            <p>Dear {booking_data.get('clientName', 'Valued Client')},</p>
            <p>Thank you for choosing LUXE VENUE! We are delighted to confirm your booking. Please find your booking details below:</p>
            
            <div class="section">
                <div class="section-title">Booking Reference</div>
                <div class="info-row">
                    <div class="info-label">Reference ID:</div>
                    <div class="info-value"><strong>{booking_data.get('id', 'N/A')}</strong></div>
                </div>
                <div class="info-row">
                    <div class="info-label">Booking Type:</div>
                    <div class="info-value">{booking_data.get('bookingType', 'venue').upper()}</div>
                </div>
            </div>
            
            <div class="section">
                <div class="section-title">Event Details</div>
                <div class="info-row">
                    <div class="info-label">Event Type:</div>
                    <div class="info-value">{booking_data.get('eventType', 'N/A')}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Event Date:</div>
                    <div class="info-value"><strong>{event_date}</strong></div>
                </div>
                <div class="info-row">
                    <div class="info-label">Time:</div>
                    <div class="info-value">{booking_data.get('startTime', 'N/A')} - {booking_data.get('endTime', 'N/A')}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Guest Count:</div>
                    <div class="info-value">{booking_data.get('guestCount', 0)} guests</div>
                </div>
            </div>
            
            <div class="section">
                <div class="section-title">Financial Summary</div>
                <div class="info-row">
                    <div class="info-label">Total Amount:</div>
                    <div class="info-value">£{total_amount:.2f}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Discount:</div>
                    <div class="info-value">£{discount:.2f}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Paid Amount:</div>
                    <div class="info-value">£{paid_amount:.2f}</div>
                </div>
            </div>
            
            <div class="highlight-box">
                <div style="font-size: 14px; color: #92400E; margin-bottom: 5px;">Balance Due</div>
                <div class="balance-amount">£{balance_due:.2f}</div>
                <div style="margin-top: 10px; font-size: 13px; color: #92400E;">
                    Payment due 14 days before event date
                </div>
            </div>
            
            <div style="text-align: center;">
                <a href="{os.environ.get('APP_URL', 'https://luxevenue.co.uk')}/crm/bookings" class="button">
                    View Full Booking Details
                </a>
            </div>
            
            <div class="section">
                <p><strong>Important Reminders:</strong></p>
                <ul style="color: #6B7280; line-height: 2;">
                    <li>A copy of your booking confirmation PDF is attached</li>
                    <li>Please review our terms & conditions in the PDF</li>
                    <li>Final balance must be paid 14 days before your event</li>
                    <li>Contact us for any changes or special requests</li>
                </ul>
            </div>
            
            <div class="footer">
                <p><strong>LUXE VENUE</strong></p>
                <p>Birmingham, United Kingdom</p>
                <p>Email: info@luxevenue.co.uk | Phone: +44 121 XXX XXXX</p>
                <p style="margin-top: 15px; font-size: 11px;">
                    This email was sent to {booking_data.get('clientEmail', '')}.<br/>
                    Please do not reply to this automated email.
                </p>
            </div>
        </div>
    </div>
</body>
</html>
'''
    
    return html

def get_booking_reminder_email(booking_data):
    """
    Payment reminder email template
    """
    total_amount = float(booking_data.get('totalAmount', 0))
    discount = float(booking_data.get('discount', 0))
    paid_amount = float(booking_data.get('paidAmount', 0))
    balance_due = total_amount - discount - paid_amount
    
    event_date = booking_data.get('date', 'N/A')
    if isinstance(event_date, str) and 'T' in event_date:
        event_date = event_date.split('T')[0]
    
    html = f'''
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
        .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
        .header {{ background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }}
        .content {{ background: white; padding: 30px; border: 1px solid #E5E7EB; border-radius: 0 0 8px 8px; }}
        .alert {{ background: #FEF2F2; border-left: 4px solid #DC2626; padding: 15px; margin: 20px 0; }}
        .amount {{ font-size: 32px; font-weight: bold; color: #DC2626; }}
        .button {{ display: inline-block; background: #DC2626; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; margin: 15px 0; }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Payment Reminder</h1>
        </div>
        <div class="content">
            <p>Dear {booking_data.get('clientName', 'Valued Client')},</p>
            <p>This is a friendly reminder about your upcoming booking at LUXE VENUE.</p>
            
            <div class="alert">
                <strong>⚠️ Payment Due</strong><br/>
                Your event is scheduled for <strong>{event_date}</strong>.<br/>
                Outstanding balance: <span class="amount">£{balance_due:.2f}</span>
            </div>
            
            <p><strong>Booking Reference:</strong> {booking_data.get('id', 'N/A')}</p>
            <p><strong>Event Type:</strong> {booking_data.get('eventType', 'N/A')}</p>
            
            <div style="text-align: center;">
                <a href="{os.environ.get('APP_URL', 'https://luxevenue.co.uk')}/crm/bookings" class="button">Make Payment</a>
            </div>
            
            <p>Please ensure payment is completed at least 14 days before your event date to avoid any issues.</p>
            <p>If you have already made the payment, please disregard this reminder.</p>
            
            <p>Best regards,<br/><strong>LUXE VENUE Team</strong></p>
        </div>
    </div>
</body>
</html>
'''
    return html
