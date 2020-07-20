module.exports = {
  name:"/clearchat",
  description:"admin command. used to delete messages.",
  cooldown: 5,
  execute(message, args) {
    if (message.channel.type == "dm") return message.channel.send ("o'rly?");
    if (!message.member.hasPermission("MANAGE_MESSAGES")) 
      return message.channel.send(
        "aight deletin--- whoa there bud, you lack perms to do that"
      );
    
    const arguments = message.content.split(" ").slice(1);
    const amount = arguments.join(" ");
    
    if (!amount) return message.channel.send("give me the numbers, mason");
    if (isNaN(amount)) return message.channel.send("the NUMBERS");
    
    if (amount > 100)
      return message.channel.send("ayy cunt you can't delete more than 100 messages at once");
    
    if (amount < 1)
      return message.channel.send("unable to delete lesser than one message");
    
    message.channel.fetchMessages({ limit: amount}).then(messages => {
      message.channel.bulkDelete(messages);
      
      console.log(
      `Admin function used. deleted ${amount} messages (one for command)`
      );
  });
}};
