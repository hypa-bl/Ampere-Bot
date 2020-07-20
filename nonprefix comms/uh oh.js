module.exports = {
  name:"uh oh",
  description: "stinky", 
  execute(message, args) {
    console.log("a stinky monkey reference was made!");
    message.react("🇸")
    .then(() => message.react("🇹"))
    .then(() => message.react("🇮"))
    .then(() => message.react("🇳")) 
 		.then(() => message.react("🇰")) 
    .then(() => message.react("🇾"))
    .catch(() => console.log("reactions failed"));
  }
};