//base by DGXeon (Xeon Bot Inc.)
//YouTube: @Callisto-god
//Instagram: tf.joe7
//Telegram: t.me/secondtate
//GitHub: @zeuesser
//WhatsApp: +918891667734

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "918891667734"
global.ownername = "𝕮𝖆𝖑𝖑𝖎𝖘𝖙𝖔"
global.ytname = "Callisto-god"
global.socialm = "GitHub: Zeuesser"
global.location = "Dg khan"

global.ownernumber = '918891667734'  //creator number
global.ownername = '𝕮𝖆𝖑𝖑𝖎𝖘𝖙𝖔' //owner name
global.botname = 'XBB' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'Saad\n\nContact: +918891667734'

//console view/theme
global.themeemoji = '🪀'
global.wm = "Saad."

//theme link
global.link = 'https://chat.whatsapp.com/BldMK0T2njzGZ6t0XfgK0Q'

//custom prefix
global.prefa = ['']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoread_status = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
