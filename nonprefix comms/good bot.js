module.exports = {
  name: "good bot",
  description: "yeah",
  cooldown: "1",
  execute(message, args) {
    console.log("bot good. doog bog");
  	message.react("😩")
    .then(() => message.react("🇧"))
    .then(() => message.react("🇷"))
    .then(() => message.react("🇺")) 
 		.then(() => message.react("🇭"))
    .catch(() => console.log("reactions failed")); 
  }
};