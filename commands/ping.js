module.exports = {
  name: "ping",
  description: "not pong",
  execute(message, args) {
    message.channel.send("what's popping?");
  }
};