module.exports = {
  name: "test",
  description :"tset",
  execute(message, args) {
    const Discord = require("discord.js");
    const ampere = new Discord.Client();
    try {
    const test1 = message.channel.type;
    const test2 = message.channel.createdAt;
    const test3 = ampere.status;
      
    message.channel.send(
      `channel type : ${test1}
      created : ${test2}
      client : ${test3}`);
    } 
   catch (error) {
     console.log(error);
     message.channel.send("hmmmmm")
     .then(sentMessage => {
       sentMessage.react("🗿");
     });
   }
    
  } 
};