module.exports = {
  name: "pirate",
  description: "arr matey",
  aliases: ["piracy", "pirating"],
  execute(message, args) {
    message.channel.send("arr")
    .then(msg => {
  msg.delete(5000);
	});
  }
};