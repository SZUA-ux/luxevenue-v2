"use strict";(()=>{var e={};e.id=7754,e.ids=[7754],e.modules={11185:e=>{e.exports=require("mongoose")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},61282:e=>{e.exports=require("child_process")},84770:e=>{e.exports=require("crypto")},80665:e=>{e.exports=require("dns")},17702:e=>{e.exports=require("events")},92048:e=>{e.exports=require("fs")},32615:e=>{e.exports=require("http")},35240:e=>{e.exports=require("https")},98216:e=>{e.exports=require("net")},19801:e=>{e.exports=require("os")},55315:e=>{e.exports=require("path")},76162:e=>{e.exports=require("stream")},82452:e=>{e.exports=require("tls")},17360:e=>{e.exports=require("url")},21764:e=>{e.exports=require("util")},71568:e=>{e.exports=require("zlib")},66184:(e,t,n)=>{n.r(t),n.d(t,{originalPathname:()=>x,patchFetch:()=>S,requestAsyncStorage:()=>g,routeModule:()=>m,serverHooks:()=>T,staticGenerationAsyncStorage:()=>y});var r={};n.r(r),n.d(r,{POST:()=>d});var o=n(49303),i=n(88716),a=n(60670),s=n(87070),u=n(83820),p=n(30364),c=n(55245);async function l(e){try{let t=c.createTransport({host:process.env.SMTP_HOST,port:parseInt(process.env.SMTP_PORT||"587"),secure:!1,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASSWORD}}),n=["luxevenue01@gmail.com","info@luxevenue.co.uk"],r=new Date(e.date).toLocaleDateString("en-GB"),o=`
🔔 NEW BOOKING CREATED - BACKUP NOTIFICATION

Booking ID: ${e.id}
Booking Type: ${e.bookingType.toUpperCase()}
Status: ${e.status.toUpperCase()}

CLIENT DETAILS:
Name: ${e.clientName}
Email: ${e.clientEmail}
Phone: ${e.clientPhone}

EVENT DETAILS:
Type: ${e.eventType}
Date: ${r}
Time: ${e.startTime} - ${e.endTime}
Guests: ${e.guestCount}

FINANCIAL:
Total Amount: \xa3${e.totalAmount||0}
Discount: \xa3${e.discount||0}
Paid Amount: \xa3${e.paidAmount||0}
Balance Due: \xa3${e.balanceDue||0}

Notes: ${e.notes||"None"}

Created: ${new Date().toLocaleString("en-GB")}

---
This is an automated backup email to protect against system failures.
Please verify this booking in the CRM system.
`;await t.sendMail({from:`"LUXE VENUE CRM Backup" <${process.env.SENDER_EMAIL}>`,to:n.join(", "),subject:`[BACKUP] New ${e.bookingType.toUpperCase()} Booking - ${e.clientName}`,text:o}),console.log("✅ Backup email sent to:",n.join(", "))}catch(e){console.error("⚠️ Failed to send backup email:",e)}}async function d(e){try{await (0,u.u)();let t=await e.json();if(!t.clientName||!t.clientEmail||!t.eventType||!t.date||!t.bookingType)return s.NextResponse.json({success:!1,error:"Missing required fields"},{status:400});let n=parseFloat(t.totalAmount)||0,r=parseFloat(t.discount)||0,o=parseFloat(t.paidAmount)||0,i=await p.$.create({id:`BK-${Date.now()}`,bookingType:t.bookingType,clientName:t.clientName,clientEmail:t.clientEmail,clientPhone:t.clientPhone||"N/A",eventType:t.eventType,date:new Date(t.date),startTime:t.startTime||"10:00",endTime:t.endTime||"18:00",guestCount:t.guestCount||50,totalAmount:n,discount:r,paidAmount:o,balanceDue:n-r-o,status:t.status||"tentative",notes:t.notes||"",menuDetails:"",specialRequirements:"",typeSpecificData:{}});return l(i.toObject()).catch(e=>console.error("Background email send failed:",e)),s.NextResponse.json({success:!0,bookingId:i._id.toString(),message:"Booking created successfully"})}catch(e){return console.error("Error creating direct booking:",e),s.NextResponse.json({success:!1,error:e.message||"Failed to create booking"},{status:500})}}let m=new o.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/bookings/create-direct/route",pathname:"/api/bookings/create-direct",filename:"route",bundlePath:"app/api/bookings/create-direct/route"},resolvedPagePath:"/app/frontend/app/api/bookings/create-direct/route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:g,staticGenerationAsyncStorage:y,serverHooks:T}=m,x="/api/bookings/create-direct/route";function S(){return(0,a.patchFetch)({serverHooks:T,staticGenerationAsyncStorage:y})}},83820:(e,t,n)=>{n.d(t,{M:()=>u,u:()=>s});var r=n(11185),o=n.n(r);let i=process.env.MONGODB_URI;if(!i)throw Error("Please define the MONGODB_URI environment variable inside .env.local");let a=global.mongoose;async function s(){if(a.conn)return a.conn;a.promise||(a.promise=o().connect(i,{bufferCommands:!1}));try{a.conn=await a.promise}catch(e){throw a.promise=null,e}return a.conn}function u(){return 1===o().connection.readyState}a||(a=global.mongoose={conn:null,promise:null})},30364:(e,t,n)=>{n.d(t,{$:()=>a});var r=n(11185),o=n.n(r);let i=new r.Schema({id:{type:String,required:!0,unique:!0},bookingType:{type:String,enum:["venue","catering","hire"],required:!0},sourceLeadId:{type:String},sourceLeadType:{type:String,enum:["venue","catering","hire"]},clientName:{type:String,required:!0},clientEmail:{type:String,required:!0},clientPhone:{type:String,required:!0},eventType:{type:String,required:!0},date:{type:Date,required:!0},startTime:{type:String,required:!0},endTime:{type:String,required:!0},guestCount:{type:Number,required:!0},notes:{type:String},status:{type:String,enum:["tentative","confirmed","completed","cancelled"],default:"tentative"},totalAmount:{type:Number,default:0},discount:{type:Number,default:0},paidAmount:{type:Number,default:0},balanceDue:{type:Number,default:0},paymentStatus:{type:String,enum:["pending","partial","paid"],default:"pending"},menuDetails:{type:String},specialRequirements:{type:String},typeSpecificData:{type:r.Schema.Types.Mixed,default:{}}},{timestamps:!0,collection:"bookings"});i.index({date:1,status:1}),i.index({clientEmail:1}),i.index({bookingType:1}),i.index({sourceLeadId:1});let a=o().models.Booking||o().model("Booking",i)}};var t=require("../../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[8948,5972,5245],()=>n(66184));module.exports=r})();