//BASW ORIGT BY MHANKBARBAR
//SELF BOT BY FxBot
//DEJA CRÉDITOS
//Santi es el creador del Bot"
const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌',
		]
const {
    WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  processTime
} = require('@adiwajshing/baileys')
const fs = require('fs')
const axios = require("axios")
const speed = require('performance-now')
const request = require('request')
const imgbb = require('imgbb-uploader')
const toMs = require('ms')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const phoneNum = require('awesome-phonenumber')
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64')
const lolis = require('lolis.life')
const loli = new lolis()
const Exif = require('./lib/exif');
const exif = new Exif();

//********** FUNCTIONS **********//
const { removeBackgroundFromImageFile } = require('remove.bg')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')
const { uploadimg } = require('./lib/uploadimg')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')

//********** DATABASE **********//
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//*********** CUSTOMABLE ***********//
prefix = ''
hit_today = []
blocked = []
fake = '- 𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑜𝑡⛥ -'
fakeimage = fs.readFileSync(`./media/FxBot.jpeg`)
numbernye = '0'
join = '\`\`\`Oe mi Fai, bienvenido al grupo, Lea las reglas pa que no allá problemas😐❤️\n - [ Farah Bot⛥ ] -'
leave = setting.leave
namabot = setting.namabot
promote = setting.promote
demote = setting.demote
 f = '```'
public = false

//*********** VCARD  ***********//
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Farah Bot⛥シ︎\n'
            + 'ORG:Owner Santi;\n'
            + 'TEL;type=CELL;type=VOICE;waid=16506442044:+1 (650) 6442044\n'
            + 'END:VCARD'
            

//*********** 𝗔𝗣𝗜𝗞𝗘𝗬 ***********//
const BarBarKey = 'IDxO1TFYnKADlX4pxcHa'
const VhtearKey = '1BlnApiIkyPake'
const XteamKey = 'AbilGanss'
const TobzApi = 'Bidmzz1sJ2L1TKyqaMEU'
const ZeksApi = 'apivinz'
const LolKey = 'save133'

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minuto ${pad(seconds)} Segundo`
}
function tanggal(){
myMonths = ["enero","febrero","marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","octubre","Noviembre","Deciembre"];
			myDays = ['domingo','lunes','martes','miércoles','jueves','Viernes','sábado'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}


async function starts() {
	const FxBot = new WAConnection()
	FxBot.version = [2, 2119, 6]
	FxBot.logger.level = 'warn'
	console.log(banner.string)
	console.log(color('[ BOT]','aqua'), color("BOT BY FELIXCRACK 409", "yellow"))
	console.log('>', '[',color('INFO','blue'),']','Suscribete A Felixcrack 409...')
	FxBot.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escanea El Código QR De Arriba'))
	})

	fs.existsSync('./FxBot.json') && FxBot.loadAuthInfo('./FxBot.json')
	FxBot.on('connecting', () => {
	console.log(color('> [ INFO ]', 'white'), color('Conectando...'))
	})
	FxBot.on('open', () => {
	console.log(color('> [ INFO ]', 'white'), color('Ya me conecte 👌🏻'))
	})
		await FxBot.connect({timeoutMs: 30*1000})
  fs.writeFileSync('./FxBot.json', JSON.stringify(FxBot.base64EncodedAuthInfo(), null, '\t'))

	FxBot.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await FxBot.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await FxBot.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks  = `┏━━━━━━━━━━━━━━━━━
┃          「 *𝗛𝗢𝗟𝗔* 」
┃@${num.split('@')[0]}👋
┃BIENVENIDO AL GRUPO 
┃*${mdata.subject}*
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┃   「 *_BIENVENIDO_* 」
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┠⊷️ *Pórtese bien o lo meo🤡🤏
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┠⊷️「 *DESCRIPCIÓN* 」
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
  ${mdata.desc}*
┗━━━━━━━━━━━━━━━━━`
				let buff = await getBuffer(ppimg)
				FxBot.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await FxBot.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*@${num.split('@')[0]}*
${leave}	`
				let buff = await getBuffer(ppimg)
				FxBot.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'promote') {
			const mdata = await FxBot.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await FxBot.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			
			teks = `𝙉𝙐𝙀𝙑𝙊 𝘼𝙆𝙈𝙄𝙉
			
\`\`\`Nombre :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`Usuario :\`\`\` @${num.split('@')[0]}

\`\`\`Date : NOW\`\`\` 

\`\`\`Grupo :\`\`\` ${mdata.subject}

${promote}`
			FxBot.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Kntl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `PROMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await FxBot.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await FxBot.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `𝙎𝙀 𝙈𝘼𝙏𝙊 𝘼 𝙐𝙉 𝘼𝙆𝙈𝙄𝙉
			
\`\`\`Nombre :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`Usuario :\`\`\` @${num.split('@')[0]}

\`\`\`Dato : Reciente\`\`\`

\`\`\`Grupo :\`\`\` ${mdata.subject}

${demote}`
			FxBot.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Ktl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `DEMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})

FxBot.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        FxBot.sendMessage(callerId, "Sistema de bloqueo automático, no llames por favor", MessageType.text)
        await sleep(4000)
        await FxBot.blockUser(callerId, "add") // Block user
})
	FxBot.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	FxBot.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
           mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
	//		if (!mek.key.fromMe) return
		global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey 
			const { text, extendedText, contact, caption, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const date = new Date().toLocaleDateString()
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')
            const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
            const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
        
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
				const command = body.trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const arg = chats.slice(command.length + 2, chats.length)
			
			

			mess = {
				wait: ' Deme un aguante😐 ',
				nsfwoff: '「 ❗ 」La Funcion De Nsfw No Está Activa!',
				success: '✔️ Listooo ✔️',
				error: {
					stick: '❌ Falló, se produjo un error al convertir la imagen en una pegatina ❌',
					Iv: '❌ Enlace inválido ❌'
				},
				only: {
					group: '❌ Este comando solo se puede usar en grupos! ❌',
					ownerG: '❌ Este comando solo puede ser utilizado por el propietario del grupo! ❌',
					ownerB: '❌ Este comando solo puede ser utilizado por el propietario del bot! ❌',
					admin: '❌ Este comando solo puede ser utilizado por administradores de grupo! ❌',
					Badmin: '❌ Este comando solo se puede usar cuando el bot se convierte en administrador! ❌'
				}
			}
            const totalchat = await FxBot.chats.all()
			const botNumber = FxBot.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await FxBot.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const itsMe = sender == botNumber ? true : false
			const isWelkom = isGroup ? welkom.includes(from) : false
            var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
            const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
            const isAntiLink = isGroup ? antilink.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
            const isBanned = ban.includes(sender)
			const isOwner = ownerNumber.includes(sender)
			const q = args.join(' ')
			
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				FxBot.sendMessage(from, teks, text, {quoted:freply})
			}
			const sendMess = (hehe, teks) => {
				FxBot.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? FxBot.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : FxBot.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

const fakegroup = (teks) => {
			FxBot.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16506442044@g.us" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}


const fdocu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/FxBot.jpeg')}}}
            


const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`media/FxBot.jpeg`)} } }

const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/FxBot.jpeg`)
					},
					"title": fake,
					"description": "𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑜𝑡⛥",
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": "Satancito",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const uploadImages = (buffData, type) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}

const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    FxBot.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//FUNCTION

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage') 

            //_USUÁRIO BANEADO
           if (isCmd && isBanned) {
           return console.log(color('[BAN] Ignorando comando', 'blue'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}

   if (itsMe){
     if(chats.toLowerCase() == `${prefix}self`){
       public = false
       FxBot.sendMessage(from, `Success`, `ESTADO : UNO MISMO`)
     }
     if (chats.toLowerCase() == 'status'){
       FxBot.sendMessage(from, `STATUS : ${public ? 'PUBLICO' : 'UNO MISMO'}`)
     }
   }
   
  if (!public){
    if (!mek.key.fromMe) return
  }


			if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && !isCmd) console.log(color(time, "white"), color("[  GROUP  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
			let authorname = FxBot.contacts[from] != undefined ? FxBot.contacts[from].vname || FxBot.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			
			switch(command) {
			  
			case 'menu':
                    wew = fs.readFileSync(`./media/FxBot.jpeg`)
                    lzain = `              𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢𝗡
╭─────────────────❏
│ Hola Yo Soy ${namabot} 👋🏻
├─────────────────❏ 
│ ❍➣ Prefijo:「 ${prefix} 」
├─────────────────❏ 
│ ❍➣ Creador: Santiago 😳
├─────────────────❏ 
│ ❍➣ Conección: BaiLeys
├─────────────────❏ 
│ ❍➣ Grupo:
│ ❍➣ ${groupMetadata.subject}
├─────────────────❏
│ ❍➣ Número de chats:
│ ❍➣ ${totalchat.length}
├─────────────────❏ 
│ ❍➣ Modo: Encendido
├─────────────────❏ 
╭───❏ 𝗖𝗥𝗘𝗔𝗥 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦
│⊷️ ${f}${prefix}sticker${f}
│⊷️ ${f}${prefix}rsticker${f}
│⊷️ ${f}${prefix}stickergif${f}
│⊷️ ${f}${prefix}stickerwa${f}
│⊷️ ${f}${prefix}stickerwm${f}
│⊷️ ${f}${prefix}nobg${f}
│⊷️ ${f}${prefix}attp${f}
│⊷️ ${f}${prefix}ttp${f}
│⊷️ ${f}${prefix}take${f}
│⊷️ ${f}${prefix}exif${f}
│⊷️ ${f}${prefix}togif${f}
│⊷️ ${f}${prefix}tovideo${f}
│⊷️ ${f}${prefix}toimg${f}
╰───❏ 
╭───❏ 𝗗𝗜𝗩𝗘𝗥𝗦𝗜𝗢𝗡
│⊷️ ${f}${prefix}
│⊷️ ${f}${prefix}simi
│⊷️ ${f}${prefix}zingfake
│⊷️ ${f}${prefix}ranklindo
│⊷️ ${f}${prefix}rankpendejo
│⊷️ ${f}${prefix}rankgay
│⊷️ ${f}${prefix}slot${f}
│⊷️ ${f}${prefix}slot2${f}
╰───❏ 
╭───❏ 𝗔𝗖𝗧𝗜𝗩𝗔𝗖𝗜𝗢𝗡
│⊷️ ${f}${prefix}welcome 1/0
│⊷️ ${f}${prefix}nsfw 1/0
│⊷️ ${f}${prefix}antilink 1/0
╰───❏ 
╭───❏ 𝗠𝗘𝗡𝗨 𝗗𝗘𝗟 𝗗𝗨𝗘𝗡̃𝗢
│⊷️ ${f}${prefix}self${f}
│⊷️ ${f}${prefix}public${f}
│⊷️ ${f}${prefix}mute${f}
│⊷️ ${f}${prefix}unmute${f}
│⊷️ ${f}${prefix}encendido${f}
│⊷️ ${f}${prefix}ping${f}
│⊷️ ${f}${prefix}term${f}
│⊷️ ${f}${prefix}blocklist${f}
│⊷️ ${f}${prefix}run${f}
│⊷️ ${f}${prefix}chatlist${f} 
│⊷️ ${f}${prefix}pin${f}
│⊷️ ${f}${prefix}unpin${f}
│⊷️ ${f}${prefix}archive${f}
│⊷️ ${f}${prefix}unarchiveall${f}
│⊷️ ${f}${prefix}readall${f}
│⊷️ ${f}${prefix}delthischat${f}
╰───❏  
╭───❏ 𝗠𝗘𝗡𝗖𝗜𝗢𝗡𝗘𝗦
│⊷️ ${f}${prefix}hidetag${f}
│⊷️ ${f}${prefix}tagall${f}
│⊷️ ${f}${prefix}stctag${f}
│⊷️ ${f}${prefix}imgtag${f}
│⊷️ ${f}${prefix}contag${f}
│⊷️ ${f}${prefix}contac 6281xxx${f}
╰───❏ 
╭───❏ 𝗣𝗔𝗥𝗔 𝗠𝗢𝗗𝗜𝗙𝗜𝗖𝗔𝗥
│⊷️ ${f}${prefix}setthumb${f}
│⊷️ ${f}${prefix}setreply${f}
│⊷️ ${f}${prefix}setbodymenu${f}
│⊷️ ${f}${prefix}setwelcome${f}
│⊷️ ${f}${prefix}setleave${f}
│⊷️ ${f}${prefix}setpromote${f}
│⊷️ ${f}${prefix}setdemote${f}
╰───❏ 
╭───❏ 𝗛𝗜𝗦𝗧𝗢𝗥𝗜𝗔
│⊷️ ${f}${prefix}upswtext${f}
│⊷️ ${f}${prefix}upswimg${f}
│⊷️ ${f}${prefix}upswvideo${f}
╰───❏ 
╭───❏ 𝗚𝗥𝗨𝗣𝗢 𝗠𝗘𝗡𝗨
│⊷️ ${f}${prefix}linkgroup${f}
│⊷️ ${f}${prefix}group cerrar/abrir${f}
│⊷️ ${f}${prefix}add 6281xxx${f}
│⊷️ ${f}${prefix}kick @tag${f}
│⊷️ ${f}${prefix}promote @tag${f}
│⊷️ ${f}${prefix}demote @tagadmin${f}
│⊷️ ${f}${prefix}demoteall${f}
│⊷️ ${f}${prefix}edotensei @tag${f}
│⊷️ ${f}${prefix}listadmin${f}
│⊷️ ${f}${prefix}online${f}
│⊷️ ${f}${prefix}notif${f}
│⊷️ ${f}${prefix}leave${f}
╰───❏ 
╭───❏ 𝗔𝗟𝗠𝗔𝗖𝗘𝗡𝗔𝗠𝗜𝗘𝗡𝗧𝗢
│⊷️ ${f}${prefix}addstik${f}
│⊷️ ${f}${prefix}adimg${f}
│⊷️ ${f}${prefix}addvid${f}
│⊷️ ${f}${prefix}addvn${f}
│⊷️ ${f}${prefix}getstik${f}
│⊷️ ${f}${prefix}getimg${f}
│⊷️ ${f}${prefix}getvid${f}
│⊷️ ${f}${prefix}getvn${f}
│⊷️ ${f}${prefix}liststick${f}
│⊷️ ${f}${prefix}listimg${f}
│⊷️ ${f}${prefix}listvid${f}
│⊷️ ${f}${prefix}listvn${f}
╰───❏ 
╭───❏ 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦
│⊷️ ${f}${prefix}tourl
│⊷️ ${f}${prefix}ig${f}
│⊷️ ${f}${prefix}ytmp3${f}
│⊷️ ${f}${prefix}ytmp4${f}
╰───❏`
FxBot.sendMessage(from, wew, image, { quoted: mek, caption: lzain })
     break
  //********** SELF&PUBLIC **********//
			  case 'self':
			  if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
			    public = false
			    FxBot.sendMessage(from, `\`\`\`Status : SELF\`\`\``, text,{quoted :freply})
			    break
			    
			  case 'public':
			    if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
			    public = true
			    FxBot.sendMessage(from, `\`\`\`Status : PUBLIC\`\`\``, text,{quoted :freply})
			    break
			    case 'piropos':
				FxBot.updatePresence(from, Presence.composing) 
								const mary =['Algunos quieren ser ricos a través del dinero, otros del poder, pero lo que no saben, es que la única riqueza es tu amor verdadero.','Soñando contigo he tenido una revelación, ahora necesito que me hagas un hueco en tu corazón.','Aunque por tu corazón han pasado muchas personas, me gustaría que me hicieses un huequecito eterno, por pequeño que sea, por si pasa algo, para que no me olvides jamás.','Lo que siento por ti es tan inmenso que, para guardarlo, me haría falta otro universo.','me he convertido en un capitán pirata para asaltar tu corazón y robarle el amor.','Me preguntaste por qué te amaba y no pude responderte. Hoy entiendo que el amor verdadero es indescriptible, solo se puede sentir.','Ojalá fuese papel para poder envolverte, bombón.','Ansío besarte, abrazarte y no soltarte','A lo mejor mi hogar no es un palacio, pero me gustaría que tú fueses mi princesa.','Te amo demasiado, lo deseo todo contigo, por eso me vuelvo loc@, cuando tú no estás conmigo.','¿De casualidad tienes un mapa contigo? Porque tengo el interés de navegar por esa linda mirada','Desde que te he visto me he convertido un/a astronauta porque no he bajado de las galaxias','A pesar de que el cielo está lleno de estrellas, tú eres la más importante para mi','Si ser guapo fuera pcado, ya estarías haciendo penitencia','Los que dicen que Disneyland es el lugar más feliz del mundo no han estado junto a ti🥺','Si ser guapo matara, serías la bomba atómica😳','Si fuera gato, pasaría mis nueve vidas contigo','¿Y si nos comemos unos tacos y yo te a-taco a besos?']
					const js = mary[Math.floor(Math.random() * mary.length)]
					  wew = fs.readFileSync(`./media/thumb.jpeg`)
					FxBot.sendMessage(from, wew, image, { caption: '*ᎮᎥᏒᎧᎮᎧᏕ👌*\n\n'+ js, quoted: mek })
break  
			    case 'mute':
                if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
                FxBot.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*Muteados putos ÙwÚ*')
                console.log('succes mute chat = ' + from)
                break
            case 'unmute':
                if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
                FxBot.modifyChat(from, ChatModification.unmute)
                reply('*Ù.Ú sus mensajes me caen denuevo*')
                console.log('succes unmute chat = ' + from)
                break
case 'antilink':
if (!isGroup) return reply(mess.only.group)	 
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Ya estaba activo 🙄')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Se activo con exito✔️')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Se desactivo con éxito la función de bienvenida en este grupo ✔️')
					} else {
						reply('1 para activar, 0 para desactivar')
					}
                    break

case 'zingfake':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(8)
					if (teks.length > 25) return reply('El texto es largo, hasta 25 caracteres')
					reply('*Lo estoy haciendo, si me sale un error, inténtalo de nuevo ✓*')
					buffer = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${teks}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`)
					FxBot.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ten tu zing 😈'})
					break
case 'simi':
case 'bot':
if (args.length < 1) return reply(`Use ${prefix}simi texto`)
try { 
	X = body.slice(4)
anu = await fetchJson(`https://api.simsimi.net/v1/?text=${X}&lang=es`, {method: 'get'})
if (anu.error) return reply('No puedo leer lo que no existe 🐤 (habla weon)')
FxBot.sendMessage(from, `${anu.success} 🐤`, text, {quoted: mek})
} catch {
reply("Hubo una falla 😣")
}
break
                case 'slot2':
                    result = await fetchJson(`https://api.xteam.xyz/game/virtualslot?APIKEY=AkiraBotWa`)
                        txt = `*🎰Slot adquirido🎰* \n\n${result.map}\n`
                        txt += `\n🔖Resultado : ${result.hasil}\n`
                        txt += `🕹️Score : ${result.score}\n`
                        reply(txt)
			    case 'unpin':
                if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
                FxBot.modifyChat(from, ChatModification.unpin)
                reply('*abajo UnU*')
                console.log('unpin chat = ' + from)
                break
            case 'pin':
                if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
                FxBot.modifyChat(from, ChatModification.pin)
                reply('*Fijados UvU*')
                console.log('pinned chat = ' + from)
                break
            case 'unreadall':
                if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
                var chats = await FxBot.chats.all()
                chats.map( async ({ jid }) => {
                await FxBot.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Marcados sin leer ${chats.length} chats !\`\`\``
		    await FxBot.sendMessage(from, teks, text, {quoted: freply})
		    console.log(chats.length)
	        break
            case 'readall':
                if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
                var chats = await FxBot.chats.all()
                chats.map( async ({ jid }) => {
                await FxBot.chatRead(jid)
                })
		var teks = `\`\`\`Han sido leidos ${chats.length} chats !\`\`\``
	        await FxBot.sendMessage(from, teks, text, {quoted: freply})
		console.log(chats.length)
		break
            case 'unarchiveall':
                if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
                reply('*éxito desarchivar todo el chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await FxBot.chats.all()
                for (let _ of anu) {
                FxBot.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
                case 'slot':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            FxBot.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nDescripción: si obtienes 3 de la misma fruta, significa que ganas\n\nContoh : 🍌 : 🍌 : 🍌<=====`, text, { quoted: freply })
            break
            case 'archive':
                if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
                reply('*okey wait..*')
                console.log('chat de archivo de éxito = ' + from)
                await sleep(3000)
                FxBot.modifyChat(from, ChatModification.archive)
                break
            case 'delthischat':
                if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
                reply('*éxito eliminar este chat*')
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                FxBot.modifyChat(from, ChatModification.delete)
                break
case 'nsfw':
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
					if (!isGroupAdmins) return reply(mess.only.admin)
				if (args.length < 1) return reply('「 ❗ 」 1 Para Activar, 0 Para Desactivar')
				if (Number(args[0]) === 1) {
				if (isNsfw) return reply(`「 ❗ 」La Funcion De Nsfw Ya Esta Activada En El Grupo!!`)
				nsfw.push(from)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`「 ❗ 」Activó con éxito la función NSFW en este grupo`)
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`「 ❗ 」Deshabilitó Con Éxito La Función De Nsfw En Este Grupo`)
				} else {
				reply('「 ❗ 」 1 Para Habilitar Y 0 Para Desactivar')
				}
				break
case 'tourl':
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await FxBot.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('Responde a una imagen o un video')
            }
            break
case 'grupo':
					case 'felixgrupo':
buffer = await getBuffer(`https://telegra.ph/file/a3d623676c5a237f4ac86.jpg`)
					FxBot.sendMessage(from, buffer, image, {quoted: mek, caption: 'Link del grupo Felixcrack BOT OFC, Todos son bienvenidos!! 🤗\n-https://chat.whatsapp.com/DAheuNgcvCj92UNcZFTKEo', sendEphemeral: true, contextInfo: { forwardingScore: 1000, isForwarded: true }})
break
                
                case 'shutdown':
                if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
	        await FxBot.sendMessage(from, `Bye...\n_𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑜𝑡⛥ apagandose..._`, text,{quoted : freply})
		await sleep(3000)
                FxBot.close()
		break
		
		case 'demoteall':
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                FxBot.groupDemoteAdmin(from, members_id)
                break
                
           
			  //********** SETTING BOT **********//

  case 'setleave':
  if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
			    if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    FxBot.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					leave = body.slice(10)
					FxBot.sendMessage(from,`\`\`\`Leave cambiado exitosamente a : ${body.slice(10)}\`\`\``, text,{quoted : freply})
				break 
				
				case 'setpromote':
				if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
				  if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    FxBot.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					promote = body.slice(11)
					FxBot.sendMessage(from,`\`\`\`La promoción se ha cambiado correctamente a : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
					case 'setdemote':
					if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
					  if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    FxBot.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					demote = body.slice(11)
					FxBot.sendMessage(from ,`\`\`\`Degradar cambiado correctamente a : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
				case 'setbodymenu':
				if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
				  if (args.length < 1) return reply('*_EJEMPLO :_*\n\n  *   : *menu*\n  ~   : ~menu~\n  _ : _menu_\n ```   : ```menu```\n\n\n\n Ejemplos de uso : .setbodymenu *')
                    FxBot.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					f = body.slice(13)
					FxBot.sendMessage(from ,`\`\`\`Body menu cambiado exitosamente a : ${body.slice(13)}\`\`\``, text,{quoted : freply})
				break 
				
					case 'setwelcome':
					if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
					  if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    FxBot.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					join = body.slice(11)
					FxBot.sendMessage(from ,`\`\`\`Bienvenida se ha cambiado con éxito a : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
			  case 'setreply':
			if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
			    if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    FxBot.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					fake = body.slice(10)
					FxBot.sendMessage(from, `reply cambiado exitosamente a : ${fake}`,text,{quoted : freply})
				break 
				
				case 'setthumb':
				if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await FxBot.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./media/FxBot.jpeg`, delb)
				fs.writeFileSync('./media/img.json', JSON.stringify(imagenye))
				FxBot.sendMessage(from, `\`\`\`Cambiar miniaturas con éxito\`\`\``, MessageType.text, { quoted: freply })
				break
				
				case 'getbio':
                var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await FxBot.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Status Profile Not Found")
                }
                break
case 'ranklindo':
          if (!isGroup) return reply(mess.only.group)
          tuh = fs.readFileSync(`./src/lindo.jpg`)
          jds = []
          const YDY = groupMembers
          const JSJ = groupMembers
          const TAT = groupMembers
          const SG = YDY[Math.floor(Math.random() * YDY.length)]           
          const SOD = JSJ[Math.floor(Math.random() * JSJ.length)]
          const HDH = TAT[Math.floor(Math.random() * TAT.length)]
          AJ = `●❯────────────────❮●\n😳𝚁𝚊𝚗𝚔 𝙳𝚎 𝙻𝚘𝚜 𝙼𝚊𝚜 𝙻??𝚗𝚍𝚘𝚜😘\n@${SG.jid.split('@')[0]} \n😳\n@${SOD.jid.split('@')[0]}\n😘\n@${HDH.jid.split('@')[0]}\n●❯────────────────❮●`                  
          jds.push(SG.jid)
          jds.push(SOD.jid)
          jds.push(HDH.jid)
          FxBot.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${AJ}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        break
				case 'rankgay':
          if (!isGroup) return reply(mess.only.group)
          tuh = fs.readFileSync(`./src/gay.jpeg`)
          jds = []
          const Z11 = groupMembers
          const U11 = groupMembers
          const T11 = groupMembers
          const F11 = Z11[Math.floor(Math.random() * Z11.length)]           
          const G22 = U11[Math.floor(Math.random() * U11.length)]
          const H33 = T11[Math.floor(Math.random() * T11.length)]
          D11 = `●❯────────────────❮●\n🏳️‍🌈𝚁𝚊𝚗𝚔 𝙳𝚎 𝙻𝚘𝚜 𝙼??𝚜 𝙶𝚊𝚢🏳️‍🌈\n@${F11.jid.split('@')[0]} \n🏳️‍🌈\n@${G22.jid.split('@')[0]}\n🏳️‍🌈\n@${H33.jid.split('@')[0]}\n●❯────────────────❮●`                  
          jds.push(F11.jid)
          jds.push(G22.jid)
          jds.push(H33.jid)
          FxBot.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${D11}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        break
case 'ban':
if (!isGroup) return reply(ptbr.group())
if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} ha sido prohibido y ya no podrá usar comandos de bot🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unban':
if (!isGroup) return reply(ptbr.group())
if (!mek.key.fromMe) return reply('*Este comandó solo puede ser usado por mi 🌚🤙🏼*')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} se ha desbloqueado y puede volver a utilizar los comandos del bot❎`
mentions(`${susp}`, mentioned, true)   
break
case 'rankpendejo':
          if (!isGroup) return reply(mess.only.group)
          tuh = fs.readFileSync(`./src/gay.jpeg`)
          jds = []
          const HSJ = groupMembers
          const JAS = groupMembers
          const UDD = groupMembers
          const XTX = HSJ[Math.floor(Math.random() * HSJ.length)]           
          const NSN = JAS[Math.floor(Math.random() * JAS.length)]
          const GDG = UDD[Math.floor(Math.random() * UDD.length)]
          JDD = `●❯────────────────❮●\n🥴𝚁𝚊𝚗𝚔 𝙳𝚎 𝙻𝚘𝚜 𝙼𝚊𝚜 𝙿𝚎𝚗𝚍𝚎𝚓𝚘𝚜🥴\n@${XTX.jid.split('@')[0]} \n🥴\n@${NSN.jid.split('@')[0]}\n🥴\n@${GDG.jid.split('@')[0]}\n●❯────────────────❮●`                  
          jds.push(XTX.jid)
          jds.push(NSN.jid)
          jds.push(GDG.jid)
          FxBot.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${JDD}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        break
				case 'getpic':
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await FxBot.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					FxBot.sendMessage(from, thumb, MessageType.image)
				{quoted : freply}}
				break
				
				  case 'join':
                           if (!q) return reply('Ingrese el enlace del grupo')
                           var codeInvite = body.slice(6).split('https://chat.whatsapp.com/')[1]
                           if (!codeInvite) return fakegroup ('asegúrese de que el enlace sea correcto!')
                           var response = await FxBot.acceptInvite(codeInvite);
                           console.log(response);
                           break
    case 'adminlist':
case 'admins':
case 'adminslista':
if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isGroup) return reply(mess.only.group)
					teks = `▢ Lista de los guapos del grupo *${groupMetadata.subject}*\n▢ Total : ${groupAdmins.length}\n▢ Mensaje:* ${body.slice(12)}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
          //Satangroup
         
        //********** SYSTEM **********//
        case 'return':
                                case 'run':
                                        return fakegroup(JSON.stringify(eval(args.join(''))))
                                        break
			     case '=>':
                        let code = args.join(" ")
                    try {
    
                    if (!code) return FxBot.reply(from, 'No JavaScript Code', id)
                    let evaled;
    
                    if (code.includes("--silent") && code.includes("--async")) {
                    code = code.replace("--async", "").replace("--silent", "");
    
                    return await eval(`(async () => { ${code} })()`)
                    } else if (code.includes("--async")) {
                    code = code.replace("--async", "");
            
                    evaled = await eval(`(async () => { ${code} })()`);
                    } else if (code.includes("--silent")) {
                    code = code.replace("--silent", "");
            
                    return await eval(code);
                    } else evaled = await eval(code);
    
                  if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled, { depth: 0 });
      
                let output = clean(evaled);
                var options = {
                    contextInfo: {
                        participant: '0@s.whatsapp.net',
                        quotedMessage: {
                            extendedTextMessage: {
                                text: "𝐄𝐗𝐄𝐂𝐔𝐓𝐎𝐑"
                            }
                        }
                    }
                }
                FxBot.sendMessage(from, `${output}`, text, options)
                } catch(err) {
                console.error(err)
                reply(err)
                }
                function clean(text) {
                if (typeof text === "string")
                  return text
                    .replace(/`/g, `\`${String.fromCharCode(8203)}`)
                    .replace(/@/g, `@${String.fromCharCode(8203)}`);
                // eslint-disable-line prefer-template
                else return text;
                }
                break
                
             
				
				case 'blocklist':
				  case 'listblock':
					teks = 'Personas aguebadas🤡 :\n'
					for (let block of blocked) {
						teks += `┣❥  @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					FxBot.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
					
					//********** CONVERT **********//
					case 'take':
					if (!isQuotedSticker) return reply(`Responder a un sticker con *${prefix}takestick nombre|autor*`)
					var pembawm = body.slice(5)
					var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var media = await FxBot.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					var packname = pembawm.split('|')[0]
					var author = pembawm.split('|')[1]
					exif.create(packname, author, `takestick_${sender}`)
					exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('Error')
					FxBot.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: freply})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				
				case 'togif':
                                        if (!isQuotedSticker) return reply('Responde un sticker')
                                        reply(mess.wait)
                                        if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
                                        FxBot.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Nih', quoted: freply})
                                }
                                break
				
				case 'tovideo':
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await FxBot.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".gif")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/togif?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            FxBot.sendMessage(from, ini_buff, video, { quoted: freply, mimetype: "video/gif", filename: file_name }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Envía una imagen con ${prefix + command} o etiquetar imágenes que ya se han enviado`)
                    }
                    break
case 'tagall':
if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					var nom = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `├╼ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*▢ Mensaje:* ${body.slice(8)}\n*▢ Grupo:*  ${groupName}\n*▢ Miembros:* ${groupMembers.length} \n*▢ Total De Admins:* ${groupAdmins.length}\n┌───⊷ *MENCIONES* ⊶`+teks+'└─────✪ FH ┃ BOT ✪───────* ', members_id, true)
					break
			
					
case 'attp':
				if (args.length < 1) return reply(`_Y el texto? Ù.ú_\n*ejemplo ${prefix}attp satan Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				FxBot.sendMessage(from, attp2, sticker, {quoted: freply})
				break
				
		case 'ttp':
				if (args.length < 1) return reply(`_Y el texto? Ù.ú_\n*ejemplo ${prefix}ttp satan Ganteng*`)
				ttp = await getBuffer(`http://lolhuman.herokuapp.com/api/ttp?apikey=${LolKey}&text=${body.slice(5)}`)
				FxBot.sendMessage(from, ttp, sticker, {quoted: freply})
				break
					
           
                case 'nulis2':
            case 'tulis2':
                if (args.length < 1) return reply('¿Dónde está el texto, hermano?? ejemplo : ${prefix}nulis2 IKY baik hati')
                laysha = body.slice(8)
                reply('ESPERA BRO YO ESCRIBO DUMLU YAKAN')
                buff = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${laysha}&APIKEY=${XteamKey}`)
                FxBot.sendMessage(from, buff, image, { quoted: freply, caption: 'Mejor escribirlo tu mismo :*' })
                break
            case 'nulis1':
            case 'tulis1':
                if (args.length < 1) return reply('Teksnya mana kak? Contoh : ${prefix}nulis2 ITS baik hati')
                laysha = body.slice(8)
                reply('WAIT BRO GUE NULIS DUMLU YAKAN')
                buff = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${laysha}&APIKEY=${XteamKey}`)
                FxBot.sendMessage(from, buff, image, { quoted: freply, caption: 'Lebih baik nulis sendiri ya kak :*' })
                break
                
                    case 'stickerwa':
                    if (args.length == 0) return reply(`Example: ${prefix + command} satan`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${LolKey}&img=${x}`)
                        FxBot.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                    
                    case 'rs':
                      case 'rsticker':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await FxBot.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpwround?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            FxBot.sendMessage(from, ini_buff, sticker, { quoted: freply}).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                    
                    
		case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								FxBot.sendMessage(from, buff, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						FxBot.sendMessage(from, mess.wait, text,{quoted : freply})
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Yah error dek`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								FxBot.sendMessage(from, buff, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						FxBot.sendMessage(from, mess.wait, text,{quoted : freply})
						keyrmbg = 'C5ZeygbiedTZixDJJrm663Az'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Yah error dek')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								FxBot.sendMessage(from, buff, sticker, {quoted: freply})
							})
						    })					
					} else {
						reply(`Responde a una imagen con ${prefix}sticker`)
					}
					break
					
					case 'toimg':
					if (!isQuotedSticker) return reply('Responde a un sticker')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await FxBot.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Error al convertir la pegatina en imagen ')
						buffer = fs.readFileSync(ran)
						FxBot.sendMessage(from, buffer, image, {quoted: freply, caption: fake})
						fs.unlinkSync(ran)
					})
					
					break 
				
					
					case 'ping':
					  const chatsIds = await FxBot.chats.all()
                const timestamp = speed();
                const latensi = speed() - timestamp 
                p0 =` \`\`\`Loaded Message\`\`\`
                
\`\`\` - [ ${totalchat.length} ]  Total Chat\`\`\`
\`\`\` - [ ${FxBot.user.phone.wa_version} ] WA Version\`\`\`
\`\`\` - [ SELF ] MODE\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 4095 ] RAM\`\`\`

\`\`\`Speed : ${latensi.toFixed(4)} Second\`\`\``
                FxBot.sendMessage(from, p0, text, { quoted: freply})
                    break
                    
					case 'encendido':
uptime = process.uptime()
const timestampi = speed();
const latensip = speed() - timestampi
			             anjink =`◪ Encendido
├ *Nombre : Farah Bot⛥*_
├ *Runtime :*=
├  ${kyun(uptime)}
├ *Speed :*
├  ${latensip.toFixed(4)} Second
└─────────────`
			             FxBot.sendMessage(from, anjink, text,{quoted : freply})
			           break
			           
			           case 'term': 
case 'exec':
const cmyd = body.slice(6)
var itsme = `0@s.whatsapp.net`
var split = `*EXECUTOR SELF BOT*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(cmyd, (err, stdout) => {
if (err) return FxBot.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
FxBot.sendMessage(from, stdout, text, term)
}
})
break

					  //********** Funny COMMAND **********//
					  
					  case 'contak':
                        entah = args[0]
                        disname = args[1]
                        if (isNaN(entah)) return reply('numero invalido UnU'.toUpperCase());
                        vcard = 'BEGIN:VCARD\n'
                                  + 'VERSION:3.0\n'
                                  + `FN:${disname}\n`
                                  + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
                                  + 'END:VCARD'.trim()
                            FxBot.sendMessage(from, {displayName: disname, vcard: vcard}, contact)
                            break
                            
			     case 'contag':
					var bv = body.slice(8)
					var jl = `${bv}`
					if (args[0] === '') {
					var jl = `*CONTACT TAG*`
					}
					var group = await FxBot.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
					const vcardtag = 'BEGIN:VCARD\n'
					            + 'VERSION:3.0\n'
					            + `FN:${body.slice(8)}\n`
					            + 'ORG:Creator SELF BOT;\n'
					            + `TEL;type=CELL;type=VOICE;waid=${FxBot.user.jid.split('@')[0]}:${FxBot.user.jid.split('@')[0]}\n`
					            + 'END:VCARD'
            				FxBot.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: mek, contextInfo: {mentionedJid: mem}, quoted: {
					key: {
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
					},
					message: {
						"imageMessage": {
							"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
							"mimetype": "image/jpeg",
							"caption": jl,
							"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
							"fileLength": "28777",
							"height": 1080,
							"width": 1079,
							"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
							"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
							"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
							"mediaKeyTimestamp": "1610993486",
							"jpegThumbnail": fs.readFileSync('./media/FxBot.jpeg'),
							"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
							}
							}
							}
							})
        break
        
        case 'hidetag':
        if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await FxBot.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
					FxBot.sendMessage(from, options, text,{quoted : freply})
					break
					
					  
					
			           case 'stctag':
			if (!isGroupAdmins) return reply(mess.only.admin)
                                        if (!isQuotedSticker) return reply('y el sticker?')
                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await FxBot.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await FxBot.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `${body.slice(8)}`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        FxBot.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
					
					case 'imgtag':
					if (!isGroupAdmins) return reply(mess.only.admin)
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await FxBot.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await FxBot.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: freply
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        FxBot.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag a una imagen enviada`)
                    }
                    break
                    
                    case 'owner':
                 FxBot.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: freply})
                 FxBot.sendMessage(from, 'Este es mi creador no molestes:)',text, { quoted: freply} )
                 break
 
        
    			  //********** ONLY GROUP **********//
        case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await FxBot.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    FxBot.sendMessage(from, yeh, text, {quoted: freply})
			        break
			        
        case 'grup':
					case 'gc':
					case 'group':
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'abrir') {
					    reply(`\`\`\`✓abierto con éxito\`\`\` *${groupMetadata.subject}*`)
						FxBot.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'cerrar') {
						reply(`\`\`\`✓cerrado con éxito\`\`\` *${groupMetadata.subject}*`)
						FxBot.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
					
					case 'chatlist':
				case 'cekchat':
					FxBot.updatePresence(from, Presence.composing)
					FxBot.sendMessage(from, `Total : ${totalchat.length} Chat`, text, {quoted  : freply})
					break
					
					case 'demote':
			      case 'dm' : 
			if (!isGroupAdmins) return reply(mess.only.admin)
			    if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recibido, no eres administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						FxBot.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Uff, @${mentioned[0].split('@')[0]} Ya no eres admin💩`, mentioned, true)
						FxBot.groupDemoteAdmin(from, mentioned)
					}
					break
					
					
					case 'promote':
				case 'pm':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recibido, te conviertes en administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						FxBot.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Uff 🥳, @${mentioned[0].split('@')[0]} Ahora eres Admin del grupo, en que te sirvo mi rey 👑*${groupMetadata.subject}*`, mentioned, true)
						FxBot.groupMakeAdmin(from, mentioned)
					}
					break
					
					case 'welcome':
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Quien eres? 7-7')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ya activo ')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Se ah activado la funcion de welcome')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Se desactivo con éxito ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
                    break
                    
					case 'add':
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('quien quieres añadir??')
					if (args[0].startsWith('08')) return reply('Usa el código de país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						FxBot.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('No se pudo agregar el objetivo, tal vez porque en privado')
					}
					break
					
			    case 'kick':
			if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Orden recibida, emitida :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						FxBot.groupRemove(from, mentioned)
					} else {
						mentions(`Orden recibida, emitida : @${mentioned[0].split('@')[0]}`, mentioned, true)
						FxBot.groupRemove(from, mentioned)
					}
					break 
					
										case 'online':
										  case 'listonline':
                if (!isGroup) return reply(`Only group`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(FxBot.chats.get(ido).presences), FxBot.user.jid]
                FxBot.sendMessage(from, 'Lista de los que estan en línea:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: freply,
                    contextInfo: { mentionedJid: online }
                })
                break
                
               
					
					case 'edotensei':
					  case 'edotense':
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di edotense!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Se expulso :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						FxBot.groupRemove(from, mentioned)
					} else {
						mentions(`Se expulso a : @${mentioned[0].split('@')[0]}`, mentioned, true)
						FxBot.groupRemove(from, mentioned)
					}
					break
					
					case 'notif':
					if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
teks = `Notificacio de: @${sender.split("@")[0]}\n*Mensaje : ${body.slice(7)}*`
group = await FxBot.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: freply
}
await FxBot.sendMessage(from, options, text)
break

      case 'leave': 
      if (!isGroupAdmins) return reply(mess.only.admin)
				    if (!isGroup) return reply(mess.only.group)
			    	anu = await FxBot.groupLeave(from, `Adios fue un gusto estar en *${groupMetadata.subject}*`, groupId)
	                break



				
					  //********** STORAGE **********//
case 'addstik':
				if (!isQuotedSticker) return reply('Responde un sticker')
				svst = body.slice(9)
				if (!svst) return reply('nombre del sticker?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await FxBot.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
				FxBot.sendMessage(from, `Se Guardo Con Éxito El Sticker\nVerifica Con ${prefix}liststik`, MessageType.text, { quoted: freply })
				break
				
case 'getstik':
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				FxBot.sendMessage(from, result, sticker,{quoted:freply})
				} catch {
				  reply('Paquete no registrado')
				}
				break
			
			case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				FxBot.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'addimg':
				if (!isQuotedImage) return reply('Responde una imagen')
				svst = body.slice(8)
				if (!svst) return reply('Nombre de la imagen?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await FxBot.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				FxBot.sendMessage(from, `Se Guardo Con Éxito El image\nVerifica Con ${prefix}listimg`, MessageType.text, { quoted: freply })
				break

			case 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				FxBot.sendMessage(from, buffer, image, { quoted: freply, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Paquete no registrado')
				}
				break
				case 'listimg':
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				FxBot.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
				case 'addvid':
				if (!isQuotedVideo) return reply('Responde a un video')
				svst = body.slice(8)
				if (!svst) return reply('Nombre del video?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await FxBot.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				FxBot.sendMessage(from, `Se Guardo Con Éxito El video\nVerifica Con ${prefix}listvideo`, MessageType.text, { quoted: freply })
				break
case 'listvid':
				teks = '*Lista de Videos :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				FxBot.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": imagenye } })
				break
			case 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				FxBot.sendMessage(from, buffer, video, { quoted: freply, caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  reply('Paquete no registrado')
				}
				break
				case 'addvn':
				if (!isQuotedAudio) return reply('Responde un audio')
				svst = body.slice(7)
				if (!svst) return reply('Nombre del vídeo?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await FxBot.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				FxBot.sendMessage(from, `Se Guardo Con Éxito El Audio\nVerifica Con ${prefix}listvn`, MessageType.text, { quoted: freply })
				break
case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				FxBot.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: freply, ptt: true })
				} catch {
				  reply('Paquete no registrado')
				}
				break
				case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				FxBot.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": audionye } })
				break
				//********** DOWNLOAD **********//
				
				
				
				case 'play':   
				  if (args.length === 0) return reply(`Ejemplo: *${prefix}play* _El título de la musica para buscar_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*DESCARGADOR DE MUSICA BY SANTI*\n\n*🤙Titulo*: ${title}\n*⏭️Extensión*: MP3\n*⚖️Tamaño*: ${filesizeF}\n*📎Link* : ${a.data}\n\n_ESPERE ENVIANDO ARCHIVO, NO HAGA SPAM GRAN HP_`)
		                        const captions = `*DESCARGADOR DE MUSICA BY SANTI*\n\n*🤙Titulo*: ${title}\n*⏭️Extensión*: MP3\n*⚖️Tamaño*: ${filesizeF}\n*📎Link*: ${a.data}\n\n_ESPERE ENVIANDO ARCHIVO, NO HAGA SPAM GRAN HP_ _SI EL COMANDO FALLA PRUEBE CON ${prefix}play2 O ${prefix}play3_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
				
        
					
				case 'play2':   
                reply(mess.wait)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=${ZeksApi}`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*Canción encontrada!!!*\nTítulo : ${anu.result.title}\nFuente : ${anu.result.source}\nTamaño : ${anu.result.size}\n\n*ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                FxBot.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                FxBot.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
				case 'ytmp3':
				  if (args.length === 0) return reply(`Ejemplo: *${prefix}video* _El link del video para descargar`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*DESCARGADOR DE AUDIO BY SANTI*\n\n*🤙Titulo*: ${title}\n*⏭️Extensión*:MP3\n*⚖️Tamaño*:${filesizeF}\n*Link* : ${a.data}\n\n_Para la duración de más del límite se presenta en forma de enlace_`)
						const captions = `*DESCARGADOR DE AUDIO BY SANTI*\n\n*🤙Titulo*: ${title}\n*⏭️Extensión*:MP3\n*⚖️Tamaño*:${filesizeF}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break

				case 'ytmp4':
				  if (args.length === 0) return reply(`Enviar  comando *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*DESCARGADOR DE VIDEO BY FELIXCRACK*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP3\n*File⚖️Tamaño*:${filesizeF}\n*Link* : ${a.data}\n\n_Para la duración de más del límite se presenta en forma de enlace_`)
						const captionsYtmp4 = `*Video Encontrado!*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP4\n*⚖️Tamaño*:${filesizeF}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break

//********** UPLOAD **********
case 'upswtext':
					FxBot.updatePresence(from, Presence.composing)
					FxBot.sendMessage('status@broadcast', `${q}`, extendedText)
					FxBot.sendMessage(from, `Success Up story wea text ${q}`, text,{quoted : freply})
					break
					
				case 'upswimg':
					FxBot.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await FxBot.downloadMediaMessage(swsw)
						FxBot.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
					}
					bur = `Subir correctamente la imagen de la historia con título: ${q}`
					FxBot.sendMessage(from, bur, text, { quoted: mek })
					break
					
				case 'upswvideo':
					FxBot.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await FxBot.downloadMediaMessage(swsw)
						FxBot.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
					}
					bur = `Subir correctamente el vídeo de la historia con subtítulo: ${q}`
					FxBot.sendMessage(from, bur, text, { quoted: mek })
					break

				default:            
                    if (budy.startsWith('https://')){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('Te salvaste eres admin 🙂')
					if (messagesC.includes("@62812874133914")) return reply("Permiso recibido")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Enlace detectado😤 @${sender.split("@")[0]}`)
					FxBot.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)
					}, 0)
				    }
                        if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
