module.exports = {
  name: "~map refuge",
  description: "SS based command. Sends the image of the Map of Refuge.",
  aliases: ["~map science side", "~map the refuge" ],
  execute(message, args) {
    message.channel.send({
	files: ["https://i.imgur.com/oiZn4Re.jpg"]
    });
  }
};