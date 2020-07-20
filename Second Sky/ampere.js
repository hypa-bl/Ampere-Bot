module.exports = {
  name: "ampere",
  aliases: ["amp", "rod"],
  description: "~charinfo Ampere",
  execute(message, args) {
    const Discord = require("discord.js");
    const { SSWatermark, SSEmote } = require("../panties.json");
    const ampere = new Discord.Client;
    
    try{
    const CIamp = new Discord.RichEmbed()
    	.setColor("#df9a6a")
      .setDescription("**Ampere Flask**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail("https://i.imgur.com/wZgnLTh.jpg")
    	.addField(
        "○ General Info",
      	"18F, 5’4” \nResearcher \nScience Side, Support",
      true )
      .addField(
        "○ Esper Status",
        "Natural \nMetal resistance control",
      true )
      .addField(
        "○ Additional info",
        "Uses Gear - Electricity Storage + Metal Rods x2 + FNAL Instant Cooler (Stolen)  \nIntroduced - Conceptsquared Arc")
    	.attachFiles([SSWatermark])
      .setImage("attachment://gqHWRVi.png");

    message.channel.send(CIamp).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
