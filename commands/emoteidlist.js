module.exports = {
  name: "emoteidlist",
  description: "lists emotes",
  execute(message, args) {
    try {
    const emojiList = message.guild.emojis.map((e, x) => (x + " = " + e) + " | " +e.name).join("\n");
  	message.channel.send(emojiList);
    }
    catch {
    message.channel.send("no custom emotes found");
    }
  }};