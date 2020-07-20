module.exports = {
  name: "export",
	description: "exported command test",
	execute(message, args) {
		message.channel.send("command success!");
	}
};