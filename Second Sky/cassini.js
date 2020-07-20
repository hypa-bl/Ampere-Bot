module.exports = {
  name: "cassini",
  aliases: ["cass", "time"],
  description: "~charinfo Epsilon",
  execute(message, args) {
    const Discord = require("discord.js");
    const { SSWatermark, SSEmote } = require("../panties.json");
    const ampere = new Discord.Client;
    
    try{
    const CIcass = new Discord.RichEmbed()
    	.setColor("#cc5d70")
      .setDescription("**Cassini**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail("https://i.imgur.com/XTp3ig8.jpg")
    	.addField(
        "○ General Info",
      	"20F, 5’10” \nStudent? / Time Traveler \nScience Side, Support",
      true )
      .addField(
        "○ Esper Status",
        "Ancient \nPyro",
      true )
      .addField(
        "○ Additional info",
        "Introduced - Ch 4")
    	.attachFiles([SSWatermark])
      .setImage("attachment://gqHWRVi.png");

    message.channel.send(CIcass).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
