module.exports = {
  name: "huh", 
  description :"hug command wooooo", 
  execute (message, args) {
    author = message.author;
    message.channel.send(`${author} sent a huh, strange`)
  }
};