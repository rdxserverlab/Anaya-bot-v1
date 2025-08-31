 const fs = require("fs");
module.exports.config = {
	name: "zain",
		version: "1.0.1",
	hasPermssion: 0,
	credits: "Zain", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
		cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
		 react.includes("Anaya") || 
react.includes("anu")) {
		var msg = {
				body: "★꧁💗𝕄𝕐 𝔹𝔼𝔸𝕌𝕋𝕀𝔽𝕌𝕃 𝕆𝕎ℕ𝔼ℝ🥰꧂                    𝗠𝗮𝗱𝗲 𝗕𝘆🫶★\n\n✦꧁𝐃𝐑-𝐀𝐍𝐀𝐘𝐀꧂✦\n\n★★᭄𝐃𝐑 𝐀𝐍𝐀𝐘𝐀 𝐤𝐚 𝐛𝐨𝐭 𝐡𝐮 𝐦𝐚𝐬𝐨𝐨𝐦 𝐬𝐚 🥺:\n\n✦ 𝗧𝗢𝗠 𝗟𝗢𝗚𝗢 𝗞𝗢 𝗣𝗧𝗔 𝗠𝗔𝗥𝗜 𝗢𝗪𝗡𝗘𝗥 𝗗𝗢𝗖𝗧𝗢𝗥 𝗛𝗬 𝗣𝗔𝗡𝗚𝗔 𝗡𝗛𝗜 𝗟𝗘𝗡𝗔 𝗪𝗔𝗥𝗡𝗔 𝗜𝗡𝗝𝗘𝗖𝗧𝗜𝗢𝗡 𝗟𝗚𝗔 𝗗𝗬 𝗚𝗜 🙈🔥 ✦\n𝗡𝗢𝗧𝗘\n 𝕄𝔸ℝ𝕀 𝕆𝕎ℕ𝕎ℝ 𝕂𝔸 ℙℝ𝕆𝔽𝕀𝕃𝔼 𝕃𝕀ℕ𝕂 𝔻𝔸 𝔻𝕀𝔸 𝕃𝔸ℚ𝔼ℕ ℝ𝔼ℙ𝕃𝕐 𝕂𝕀 𝕌𝕄𝔼𝔼𝔻 ℕ𝔸 ℝ𝔸𝕂ℍℕ𝔸 😂 𝕎𝕆 𝕆ℙℝ𝔼𝔸𝕋𝕀𝕆ℕ 𝕄𝔸 𝔹𝕌𝕊𝕐 ℍ𝕆𝕋𝕀 🌸😂👇   https://www.facebook.com/profile.php?id=61578324150260&mibextid=ZbWKwL`",
				attachment: fs.createReadStream(__dirname + `/noprefix/anu.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		api.setMessageReaction("🫡", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
