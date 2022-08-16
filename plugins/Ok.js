let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png', m, { packname: "𝐒𝐀𝐍𝐒 𝐁𝐎𝐓", author: "𝐁𝐲𝐞 ©𝐖𝐚𝐧𝐝𝐚 𝐆𝐚𝐧𝐬" })
}

handler.customPrefix = /^(ok|sip)$/i
handler.command = new RegExp

module.exports = handler
