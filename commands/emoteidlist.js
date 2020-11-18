module.exports = {
  name: "emoteidlist",
  description: "lists emotes",
  execute(message, args) {
    try {
      const emojiList = message.guild.emojis.cache.map((e, x) => (x + ' = ' + e) + ' | ' +e.name).join('\n');
   message.channel.send(emojiList); 
    }
    catch (error) {
    console.log(error);
    message.channel.send("this command is disabled at the moment.");
    }
  }};