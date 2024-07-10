const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254112974149";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_43_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTksXG4gICAgICAgIDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NixcbiAgICAgICAgNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjksXG4gICAgICAgIDUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDcxLFxuICAgICAgICA4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODUsXG4gICAgICAgIDQxLFxuICAgICAgICA2NixcbiAgICAgICAgMTc1LFxuICAgICAgICA5OCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIwLFxuICAgICAgICA4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDczLFxuICAgICAgICAzNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2LFxuICAgICAgICA0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkxLFxuICAgICAgICA1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODksXG4gICAgICAgIDcwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBybkJNVVZldWhScUpGRm9ibUh1RGhaczhvaWVxelBlbGpHTzZrcTV0UEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0MTEyOTc0MTQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3RjQ5NTczREU3MEM0Njg1MTQ1MUQwQUM2MzYzOTlDRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MjYyMTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQxMTI5NzQxNDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJGNjQ3M0FBNjFGNDk2QTQzNkFEMjkzRDk3N0REMkNGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDYyNjIxN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDExMjk3NDE0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDM1RDZFRjA5QTVCQ0I4QzM5RjQ0NjVCRDJEQjdCMkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNjI2MjIxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0MTEyOTc0MTQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0RDM1RUNBRjRGMzUwRDgwQzUwMkFCNTI0OEZGN0Q4MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MjYyMjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUWpEMzhOQURRdm1UQWJjN0hDUzNEd1wiLFxuICBcInBob25lSWRcIjogXCI1YTYxNTVlMi0xNDcxLTRiMzMtOGNjNy0wMjllYjVkM2U3MjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAzNSxcbiAgICAgIDI0MCxcbiAgICAgIDQ4LFxuICAgICAgMTM5LFxuICAgICAgNTksXG4gICAgICA4MCxcbiAgICAgIDEwMSxcbiAgICAgIDM3LFxuICAgICAgODIsXG4gICAgICAyMzEsXG4gICAgICA3MCxcbiAgICAgIDM1LFxuICAgICAgMjQ5LFxuICAgICAgNTIsXG4gICAgICA0OCxcbiAgICAgIDE3NSxcbiAgICAgIDk4LFxuICAgICAgMTM4LFxuICAgICAgMTU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNSxcbiAgICAgIDQ5LFxuICAgICAgMTYzLFxuICAgICAgOTksXG4gICAgICAxMDIsXG4gICAgICAyMDUsXG4gICAgICAxMzAsXG4gICAgICAxODIsXG4gICAgICAxNzgsXG4gICAgICAyMTksXG4gICAgICAyMzUsXG4gICAgICA5OSxcbiAgICAgIDE0NyxcbiAgICAgIDI0NCxcbiAgICAgIDEyMyxcbiAgICAgIDE3LFxuICAgICAgMjA0LFxuICAgICAgMjMyLFxuICAgICAgMTk1LFxuICAgICAgMjUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFRhNG40UW85aTZ0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVcmFiQVVSV2RhRlRncUxPWGNHZ21zVnlCZ3VzU3FvU1NieUVGeEcrNGlNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInU1VHVOQTk2b0t3eUFpWFRubHgzTjJEZDA1TlBNbTB6ZE1wRnBJR3VyMjh4ZUdsbm5CUjloWHpTRzVHVDhyalcycjhONjVFSVpnc3B5Y0JNa2E5NUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdFMmQ0RnpyUzU0dGVYK1lMdXRTKzkyWnF5cUZxNVVza09GaVoyUVpSS3BxUWNoZFNkdld5TGtOMTB2SWIrM1RXaG1peW55UEJDaW9BOTAzZXhLbEJnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTEyOTc0MTQ5OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDE2MzU2MjMxMDA1MDk6MTVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUm9uZyFcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDExMjk3NDE0OToxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjI2MjE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTHUzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMdTMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtU0lMRjJKcGxJNHc5czRWL0pLQkozSEtQTGdObC9kMjg5Rm5veGhYNDNFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI2NTg1ODM1NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNjI2MjE1NjQzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
