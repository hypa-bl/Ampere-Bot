module.exports = {
  name: "beep",
  description: "definitely bop",
  cooldown: 1,
  execute(message, args) {
    message.channel.send("bop");
  }
};