module.exports = {
  name: "~charinfo",
  description: "totally not an ass pull", 
  execute(message, args) {
  message.channel.send(
    "use the command followed with **(character name)**, or use `~charinfo overview` if confused about names!"
  );
}};