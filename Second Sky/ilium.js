module.exports = {
  name: "ilium",
  aliases: ["bell", "il", "vibrator"],
  description: "~charinfo Ilium",
  execute(message, args) {
    const Discord = require("discord.js");
    const { SSWatermark, SSEmote } = require("../panties.json");
    const ampere = new Discord.Client;
    
    try{
    const CIilium = new Discord.RichEmbed()
    	.setColor("#405469")
      .setDescription("**Ilium Bell**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail("https://i.imgur.com/hpkGZUG.png")
    	.addField(
        "○ General Info",
      	"20F, 5’6” \nStudent \nMagic Side, Protagonists",
      true )
      .addField(
        "○ Esper Status",
        "Potential \nVibration Control",
      true )
      .addField(
        "○ Additional info",
        "Uses Gear - Broken Executioner's Sword \nIntroduced - Chapter 01")
    	.attachFiles([SSWatermark])
      .setImage("attachment://gqHWRVi.png");

    message.channel.send(CIilium).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
