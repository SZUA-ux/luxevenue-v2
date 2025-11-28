"use strict";(()=>{var e={};e.id=3892,e.ids=[3892],e.modules={11185:e=>{e.exports=require("mongoose")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},61282:e=>{e.exports=require("child_process")},84770:e=>{e.exports=require("crypto")},80665:e=>{e.exports=require("dns")},17702:e=>{e.exports=require("events")},92048:e=>{e.exports=require("fs")},32615:e=>{e.exports=require("http")},35240:e=>{e.exports=require("https")},98216:e=>{e.exports=require("net")},19801:e=>{e.exports=require("os")},55315:e=>{e.exports=require("path")},76162:e=>{e.exports=require("stream")},82452:e=>{e.exports=require("tls")},17360:e=>{e.exports=require("url")},21764:e=>{e.exports=require("util")},71568:e=>{e.exports=require("zlib")},81717:(e,t,i)=>{i.r(t),i.d(t,{originalPathname:()=>b,patchFetch:()=>x,requestAsyncStorage:()=>v,routeModule:()=>c,serverHooks:()=>m,staticGenerationAsyncStorage:()=>g});var o={};i.r(o),i.d(o,{POST:()=>u});var r=i(49303),a=i(88716),n=i(60670),s=i(87070),d=i(83820),l=i(30364),p=i(55245);async function u(e,{params:t}){try{await (0,d.u)();let{type:i}=await e.json(),o=await l.$.findById(t.id).lean();if(!o)return s.NextResponse.json({error:"Booking not found"},{status:404});let r=p.createTransport({host:process.env.SMTP_HOST,port:parseInt(process.env.SMTP_PORT||"587"),secure:!1,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASSWORD}}),a=new Date(o.date).toLocaleDateString("en-GB"),n="reminder"===i?`Booking Reminder - ${o.eventType} | Luxe Venue Ltd`:`Booking Confirmation - ${o.eventType} | Luxe Venue Ltd`,u=`
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px;
      text-align: center;
      border-radius: 10px 10px 0 0;
    }
    .content {
      background: #f9fafb;
      padding: 30px;
      border-radius: 0 0 10px 10px;
    }
    .section {
      background: white;
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .section h3 {
      color: #667eea;
      margin-top: 0;
      border-bottom: 2px solid #667eea;
      padding-bottom: 10px;
    }
    .row {
      display: flex;
      padding: 8px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    .row:last-child {
      border-bottom: none;
    }
    .label {
      font-weight: bold;
      width: 150px;
      color: #555;
    }
    .value {
      flex: 1;
    }
    .financial {
      background: #ecfdf5;
      border-left: 4px solid #10b981;
    }
    .balance-due {
      font-size: 18px;
      font-weight: bold;
      color: #10b981;
      margin-top: 15px;
      padding-top: 15px;
      border-top: 2px solid #10b981;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #e5e7eb;
      color: #666;
      font-size: 14px;
    }
    .badge {
      display: inline-block;
      padding: 5px 15px;
      border-radius: 15px;
      font-size: 12px;
      font-weight: bold;
      color: white;
    }
    .badge-confirmed { background: #10b981; }
    .badge-tentative { background: #f59e0b; }
  </style>
</head>
<body>
  <div class="header">
    <h1 style="margin: 0;">LUXE VENUE LTD</h1>
    <p style="margin: 10px 0 0 0; font-size: 18px;">${"reminder"===i?"Booking Reminder":"Booking Confirmation"}</p>
  </div>
  
  <div class="content">
    <p style="font-size: 16px; margin-bottom: 20px;">
      Dear ${o.clientName},
    </p>
    <p style="margin-bottom: 20px;">
      ${"reminder"===i?"This is a friendly reminder about your upcoming booking with LUXE VENUE.":"Thank you for booking with LUXE VENUE. We are delighted to confirm your reservation."}
    </p>
    
    <div class="section">
      <h3>Booking Details</h3>
      <div class="row">
        <div class="label">Booking ID:</div>
        <div class="value"><strong>${o.id}</strong></div>
      </div>
      <div class="row">
        <div class="label">Type:</div>
        <div class="value">${o.bookingType.toUpperCase()}</div>
      </div>
      <div class="row">
        <div class="label">Status:</div>
        <div class="value">
          <span class="badge badge-${o.status}">${o.status.toUpperCase()}</span>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h3>Event Information</h3>
      <div class="row">
        <div class="label">Event Type:</div>
        <div class="value">${o.eventType}</div>
      </div>
      <div class="row">
        <div class="label">Date:</div>
        <div class="value"><strong>${a}</strong></div>
      </div>
      <div class="row">
        <div class="label">Time:</div>
        <div class="value">${o.startTime} - ${o.endTime}</div>
      </div>
      <div class="row">
        <div class="label">Guests:</div>
        <div class="value">${o.guestCount}</div>
      </div>
    </div>
    
    <div class="section financial">
      <h3>Financial Summary</h3>
      <div class="row">
        <div class="label">Total Amount:</div>
        <div class="value">\xa3${(o.totalAmount||0).toFixed(2)}</div>
      </div>
      <div class="row">
        <div class="label">Discount:</div>
        <div class="value">\xa3${(o.discount||0).toFixed(2)}</div>
      </div>
      <div class="row">
        <div class="label">Paid Amount:</div>
        <div class="value">\xa3${(o.paidAmount||0).toFixed(2)}</div>
      </div>
      <div class="balance-due">
        <div class="row">
          <div class="label">Balance Due:</div>
          <div class="value">\xa3${(o.balanceDue||0).toFixed(2)}</div>
        </div>
      </div>
    </div>
    
    ${o.notes?`
    <div class="section">
      <h3>Notes</h3>
      <p>${o.notes}</p>
    </div>
    `:""}
    
    <div class="footer">
      <table style="width: 100%; margin-bottom: 20px;">
        <tr>
          <td style="vertical-align: top; padding-right: 20px;">
            <p style="font-weight: bold; color: #667eea; margin-bottom: 8px;">LUXE VENUE LTD</p>
            <p style="font-size: 13px; line-height: 1.6;">
              86 Leopold Street<br>
              Birmingham B12 0UD<br>
              United Kingdom
            </p>
          </td>
          <td style="vertical-align: top; padding-right: 20px;">
            <p style="font-weight: bold; color: #667eea; margin-bottom: 8px;">CONTACT US</p>
            <p style="font-size: 13px; line-height: 1.6;">
              Phone: +44 7391 222884<br>
              Email: info@luxevenue.co.uk<br>
              Support: luxevenue01@gmail.com
            </p>
          </td>
          <td style="vertical-align: top;">
            <p style="font-weight: bold; color: #667eea; margin-bottom: 8px;">BUSINESS HOURS</p>
            <p style="font-size: 13px; line-height: 1.6;">
              Mon-Fri: 9:00 AM - 6:00 PM<br>
              Saturday: 10:00 AM - 4:00 PM<br>
              Sunday: Closed
            </p>
          </td>
        </tr>
      </table>
      <p style="text-align: center; font-size: 11px; color: #999; border-top: 1px solid #e5e7eb; padding-top: 15px;">
        \xa9 ${new Date().getFullYear()} Luxe Venue Ltd. All rights reserved.
      </p>
      <p style="text-align: center; font-size: 11px; color: #999; margin-top: 8px;">
        If you have any questions about your booking, please reply to this email or call us at +44 7391 222884.
      </p>
    </div>
  </div>
</body>
</html>
    `;return await r.sendMail({from:`"${process.env.SENDER_NAME}" <${process.env.SENDER_EMAIL}>`,to:o.clientEmail,subject:n,html:u}),console.log(`✅ Email sent to: ${o.clientEmail}`),s.NextResponse.json({success:!0,message:`Email sent successfully to ${o.clientEmail}`})}catch(e){return console.error("❌ Error sending email:",e),s.NextResponse.json({error:e.message||"Failed to send email"},{status:500})}}let c=new r.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/bookings/[id]/email/route",pathname:"/api/bookings/[id]/email",filename:"route",bundlePath:"app/api/bookings/[id]/email/route"},resolvedPagePath:"/app/frontend/app/api/bookings/[id]/email/route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:v,staticGenerationAsyncStorage:g,serverHooks:m}=c,b="/api/bookings/[id]/email/route";function x(){return(0,n.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:g})}},83820:(e,t,i)=>{i.d(t,{M:()=>d,u:()=>s});var o=i(11185),r=i.n(o);let a=process.env.MONGODB_URI;if(!a)throw Error("Please define the MONGODB_URI environment variable inside .env.local");let n=global.mongoose;async function s(){if(n.conn)return n.conn;n.promise||(n.promise=r().connect(a,{bufferCommands:!1}));try{n.conn=await n.promise}catch(e){throw n.promise=null,e}return n.conn}function d(){return 1===r().connection.readyState}n||(n=global.mongoose={conn:null,promise:null})},30364:(e,t,i)=>{i.d(t,{$:()=>n});var o=i(11185),r=i.n(o);let a=new o.Schema({id:{type:String,required:!0,unique:!0},bookingType:{type:String,enum:["venue","catering","hire"],required:!0},sourceLeadId:{type:String},sourceLeadType:{type:String,enum:["venue","catering","hire"]},clientName:{type:String,required:!0},clientEmail:{type:String,required:!0},clientPhone:{type:String,required:!0},eventType:{type:String,required:!0},date:{type:Date,required:!0},startTime:{type:String,required:!0},endTime:{type:String,required:!0},guestCount:{type:Number,required:!0},notes:{type:String},status:{type:String,enum:["tentative","confirmed","completed","cancelled"],default:"tentative"},totalAmount:{type:Number,default:0},discount:{type:Number,default:0},paidAmount:{type:Number,default:0},balanceDue:{type:Number,default:0},paymentStatus:{type:String,enum:["pending","partial","paid"],default:"pending"},menuDetails:{type:String},specialRequirements:{type:String},typeSpecificData:{type:o.Schema.Types.Mixed,default:{}}},{timestamps:!0,collection:"bookings"});a.index({date:1,status:1}),a.index({clientEmail:1}),a.index({bookingType:1}),a.index({sourceLeadId:1});let n=r().models.Booking||r().model("Booking",a)}};var t=require("../../../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),o=t.X(0,[8948,5972,5245],()=>i(81717));module.exports=o})();