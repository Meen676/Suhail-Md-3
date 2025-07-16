const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923416278113";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_32_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDkzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzksXG4gICAgICAgIDcsXG4gICAgICAgIDg4LFxuICAgICAgICAyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU0LFxuICAgICAgICAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MixcbiAgICAgICAgMTQyLFxuICAgICAgICAzOSxcbiAgICAgICAgOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI4LFxuICAgICAgICAzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgODQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDYzLFxuICAgICAgICA2MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAzNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMixcbiAgICAgICAgMTY0LFxuICAgICAgICA4NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXbklscEpTRXgrUUdWb3ZJR2pjN3NKaTZlUDFBbFN1dmIyUjQ4YWdNaExZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiZzJsbGQzTFJhMmN1Yi1Id0ZqQlZRXCIsXG4gIFwicGhvbmVJZFwiOiBcImZlOGMzNWY2LTYzMGYtNGMxZi05Y2IyLTA5MzljMmEzMTY4NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDAsXG4gICAgICAxNjcsXG4gICAgICAxOTksXG4gICAgICAxOCxcbiAgICAgIDcsXG4gICAgICA3NSxcbiAgICAgIDE1OSxcbiAgICAgIDE3MyxcbiAgICAgIDI0MyxcbiAgICAgIDE1LFxuICAgICAgMjM5LFxuICAgICAgOTMsXG4gICAgICAyNTIsXG4gICAgICAxMzgsXG4gICAgICAxLFxuICAgICAgMTk0LFxuICAgICAgMjM3LFxuICAgICAgMjIzLFxuICAgICAgMTkwLFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTIsXG4gICAgICA2NyxcbiAgICAgIDIyNSxcbiAgICAgIDEwMSxcbiAgICAgIDIxNSxcbiAgICAgIDIzMSxcbiAgICAgIDU1LFxuICAgICAgMjAwLFxuICAgICAgMTg3LFxuICAgICAgMjM0LFxuICAgICAgMjAyLFxuICAgICAgNzEsXG4gICAgICA1NSxcbiAgICAgIDI0NixcbiAgICAgIDIxMSxcbiAgICAgIDIxMixcbiAgICAgIDksXG4gICAgICAxMTAsXG4gICAgICA0NSxcbiAgICAgIDE4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ppL2h3OFF2Y1Rmd3dZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTUpRVEF5aVhRb1ZqU0tSdnVicHdNNDRiTzdlMHBQREVRamluK3FybHZFWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrZ1BjQlBnS2YwK2RWQ0Fja1ZJOG5maDVIa0Z5azJPRE5HWXMzUklFcDY2WFRRZkZwV1pzWlRSbHY0MER3Y1lRVHB0YnZ3M2M4ckE0c2Q1bmIvY0FEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwK1JMMnJQTGRpcHVHdXlnU2plWWpnWSsvV2YzRk9udWIyYk43YlpGSGx4VEg3WjBEVys0OExPT3FaV2J4QWJtYWZJYnE1Rnd6V1RabnhKZXhXUE1qQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQxNjI3ODExMzo5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTg0OTA0NTQ5OTQ5NTA6OTZAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MTYyNzgxMTM6OTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUyNjg3MTY5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTzdtXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPN2wuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiNitVZFkzK1haeXNRSnZ3MjZKT2tHMklyS1RVZ2hHQ2Z0UWFSV0xxbno4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxNTgwMDU1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPN20uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCQldIZldla2RIaUVYN0t5eGc0TGdqa3UrZUhpQ05xRDVRa0lpSXQ3bmtBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxNTgwMDU1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzUyNjQwNDE5ODkwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTzduLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ1BBN2VhT3gwSm5ISVpOdWduTVcwTVAyVkdWWW81UmpUUjJvVCtkbi9rUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMTU4MDA1NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUyNjcyNzc4OTg2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "࿐🇲ᴀͥʟᷧᴀᷟɴɢ◂⁰⁰⁰³▸࿐",
  packname: process.env.PACK_NAME || "࿐🇲ᴀͥʟᷧᴀᷟɴɢ◂⁰⁰⁰³▸࿐",
  botname : process.env.BOT_NAME  || "࿐🇲ᴀͥʟᷧᴀᷟɴɢ◂⁰⁰⁰³▸࿐-MD",
  ownername:process.env.OWNER_NAME|| "࿐🇲ᴀͥʟᷧᴀᷟɴɢ◂⁰⁰⁰³▸࿐:Shy<3",


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
