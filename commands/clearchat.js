module.exports = {
  name:"/clearchat",
  description:"admin command. used to delete messages.",
  cooldown: 5,
  execute(message, args) {
    if (message.channel.type == "dm") return message.channel.send ("o'rly?");
    if (!message.member.hasPermission("MANAGE_MESSAGES")) 
      return message.channel.send(
        "you lack PERMS"
      );
    
    const argument = message.content.split(" ").slice(1);
    const amount = argument.join(" ");
    
    if (!amount) return message.channel.send("give me the numbers, mason");
    if (isNaN(amount)) return message.channel.send("the NUMBERS");
    
    if (amount > 100)
      return message.channel.send("ayy cunt you can't delete more than 100 messages at once");
    
    if (amount < 1)
      return message.channel.send("unable to delete lesser than one message");
    
    message.channel.messages.fetch({ limit: amount}).then(messages => {
      message.channel.bulkDelete(messages);
      
      console.log(
      `Admin function used. deleted ${amount} messages (one for command)`
      );
  });
}};
