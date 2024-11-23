const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/el3f52.jpeg" || "https://files.catbox.moe/el3f52.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© PLAG CORPORATION" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "50942561123";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50947440869";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_51_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgNTgsXG4gICAgICAgIDg4LFxuICAgICAgICA5MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDExMixcbiAgICAgICAgOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDcwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDMzLFxuICAgICAgICA1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDksXG4gICAgICAgIDUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDg2LFxuICAgICAgICA1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDg1LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTExLFxuICAgICAgICA0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTksXG4gICAgICAgIDYyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICA4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYwLFxuICAgICAgICA3NixcbiAgICAgICAgNzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0LFxuICAgICAgICAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMyxcbiAgICAgICAgODIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMSxcbiAgICAgICAgMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUUJpMTZMaFZBUmpXMGhaLzhUQjJPcDRlb1NyejlUeXN2MTYrTGs0TnBQdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUjZvS0cydjhTX2E0WlRnT1ZTMnB3UVwiLFxuICBcInBob25lSWRcIjogXCI4ZmRkMTViYS01Y2I2LTQ3ODQtODEyMC05NzlhY2JiMDllZThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI3LFxuICAgICAgNzIsXG4gICAgICAyMzcsXG4gICAgICAxNDMsXG4gICAgICA2OSxcbiAgICAgIDIyNSxcbiAgICAgIDgzLFxuICAgICAgNzYsXG4gICAgICAxNDAsXG4gICAgICAxNjksXG4gICAgICA0NyxcbiAgICAgIDIzOCxcbiAgICAgIDE3OCxcbiAgICAgIDIwMyxcbiAgICAgIDk2LFxuICAgICAgMTczLFxuICAgICAgMjQ4LFxuICAgICAgMjA5LFxuICAgICAgMTgsXG4gICAgICAyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDEsXG4gICAgICAyMTgsXG4gICAgICAxODcsXG4gICAgICA0OCxcbiAgICAgIDIwNyxcbiAgICAgIDIxMyxcbiAgICAgIDIzNCxcbiAgICAgIDE3MCxcbiAgICAgIDc3LFxuICAgICAgMjIzLFxuICAgICAgMTU5LFxuICAgICAgMTEzLFxuICAgICAgMTkxLFxuICAgICAgMTY3LFxuICAgICAgMTc1LFxuICAgICAgMTk1LFxuICAgICAgOSxcbiAgICAgIDUyLFxuICAgICAgOTMsXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVURjFWS0YxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDk0NzQ0MDg2OTo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODcwNzIyNDEwOTQ4Njk6NTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHVVcTdBR0VLU2loYm9HR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3L2grWFVvRlRQM3piNzhzUTNFQkJkdks3NkF2aGJTZDNPKzVQaDRVaHpVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkViVXZISHV1WjJLcHZraVZ2R005ODZlVjNacTJEaVBoaHR4Vmt3ZFFuZlg5WU9la0JpVi9va0pJQnJwUTY3M28yNk1yZEJMQlBzcHlkY1A5c1BWdUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkY1UWk0cDNuSi9XQ3VJMUFyVTJTNWZDQ0FzUFBYbWl6TzJOSXpNTDdidjVRczNNL3JINEFvNDFWL1FmS0pGRS9xQXowdGFwWnYwUTRBM2RZb0YySmh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTQ3NDQwODY5OjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIzMzM4NjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUNFQUFEb1JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQ0VBQURvUi5qc29uIjogIntcImtleURhdGFcIjpcIlU4aExBK3JySENoaDM4UURiRWJIQnNPbWFSNk9qeHRFVU9ZWWNRazRsN3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcxMTk4MzIyNSxcImN1cnJlbnRJbmRleFwiOjI2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIwLDIzLDI0LDI2LDI3XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAyOTU0OTc2MDFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "PLAG-XMD",
  ownername:process.env.OWNER_NAME|| "PLAG-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
