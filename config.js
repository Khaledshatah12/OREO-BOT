import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs' 

//OwnerShip
global.owner = [
  [process.env.OWNER_NUMBER || '919614477116', process.env.OWNER_NAME || '✮͢⚡⃟≛⃝🇸𝖚𝖇𝖆𝖗𝖚≛⃝🍁⑉៚
', true],
  ['919614477116', '✮͢⚡⃟≛⃝🇸𝖚𝖇𝖆𝖗𝖚≛⃝🍁⑉៚
', true]
]
global.mods = []
global.prems = []

global.author = process.env.OWNER_NAME || '✮͢⚡⃟≛⃝🇸𝖚𝖇𝖆𝖗𝖚≛⃝🍁⑉៚
'
global.botname = process.env.BOT_NAME || 'SUBARU-BOT'
 
 
 //Api's
global.APIs = {
}
global.APIKeys = { 
}

//Apikeys
global.shizokeys = 'shizo'

//Sticker Watermarks
global.stkpack = process.env.BOT_NAME || 'ㅤㅤㅤ🍷⑉𝐓𝐇𝐄一𝐆𝐑𝐄𝐀𝐓一𝐒𝐔𝐁𝐀𝐑𝐔҂ 🍁
ㅤㅤㅤㅤㅤㅤ ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ♪ㅤㅤㅤ 𝐃𝚫𝚪𝐋𝚰𝚴𝐆, 𝚰 𝐂𝚮𝚫𝐒𝚵 𝐆𝚯𝚫𝐋𝐒, 𝚴𝚯𝚻 𝚸𝚵𝚯𝚸𝐋𝚵

𝚐ᵣₒᵤₚ ₙₐₘₑ ₋ 𝘿A͢⃢𝞘𝙇𝙔 𝙎𝙏𝞘𝘾𝞙𝞢𝞒𝙎💖 ₊₉₁ ₉₆₁₄₄₇₇₁₁₆ 🍁'
global.stkowner = process.env.OWNER_NAME || '© SUBARU'

//Watermark
global.maker = process.env.MAKER || 'Made with ❤️ by SUBARU-BOT'

//global emojis
global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//management
global.bug = '*!! Sorry 💢 !!*\nSomething went wrong 🌋'
global.stop = '*!! 🎭 Unfortunately 💔 !!*\nBot system is not Responding 🙃'

//TimeLines
global.botdate = `*⫹⫺ Date:*  ${moment.tz('Asia/Kolkata').format('DD/MM/YY')}`
global.bottime = `*⫹⫺ Time:* ${moment.tz('Asia/Kolkata').format('HH:mm:ss')}`

//Hosting Management
global.serverHost = 1
global.getQrWeb = 0
global.renderHost = 0
global.replitHost = 0

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
