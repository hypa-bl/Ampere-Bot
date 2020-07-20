module.exports = {
  name: "epsilon",
  aliases: ["ep", "isaac", "escapist", "lettuce"],
  description: "~charinfo Epsilon",
  execute(message, args) {
    const Discord = require("discord.js");
    const { SSWatermark, SSEmote } = require("../panties.json");
    const ampere = new Discord.Client;
    
    try{
    const CIepsilon = new Discord.RichEmbed()
    	.setColor("#e9c081")
      .setDescription("**Isaac Epsilon**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail("https://i.imgur.com/KiB31Od.jpg")
    	.addField(
        "○ General Info",
      	"20M, 5’8” \nStudent \nScience Side, Protagonists",
      true )
      .addField(
        "○ Esper Status",
        "Potential \nOne-time ability copy",
      true )
      .addField(
        "○ Additional info",
        "Uses Gear - The Concept² \nIntroduced - Chapter 01")
    	.attachFiles([SSWatermark])
      .setImage("attachment://gqHWRVi.png");

    message.channel.send(CIepsilon).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
