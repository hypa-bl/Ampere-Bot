module.exports = {
  name: "hug", 
  description :"hug command wooooo", 
  execute (message, args) {
    hugArgs = message.mentions.users.size;
    nonUserArgs = message.content.slice(5);
    target = message.mentions.users.first();
    author = message.author;
    
    if (nonUserArgs == "@everyone") {
        message.channel.send(` ${message.author} gives a sweet hug with a nasty ping to everyone!`)
      }
    else if (hugArgs) {
      if (target == "670503038208966667") {
        message.channel.send("awww")
      }
      else if (target == author) {
        message.channel.send(`how lonely, here *hugs*`)
      }
      else {
      message.channel.send(`${author} sent a hug to ${target}!`);
      }
    }
    else if (!hugArgs && nonUserArgs.length > 1) {
      message.channel.send(`${author} sent a hug to ${nonUserArgs}!`)
    }
    else {message.channel.send(` ${message.author} gives a sweet hug to everyone!`)}
  }
};