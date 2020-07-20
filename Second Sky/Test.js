module.exports = {
  name: "testC",
	description: "exported command test",
	execute(message, args) {
		message.channel.send("command success!");
	}
};