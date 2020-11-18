module.exports = {
  name: "dc",
  aliases: ["porcine", "omni", "omu"],
  description: "~charinfo DC",
  execute(message, args) {
    const Discord = require("discord.js");
    const { SSWatermark, SSEmote } = require("../panties.json");

    try{
    const CIdc = new Discord.MessageEmbed()
    	.setColor("#f4ceb4")
      .setDescription("**Porcine Omni / Subject DC**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail("https://i.imgur.com/nwEYz4z.png")
    	.addField(
        "○ General Info",
      	"16M, 5’10” \nCyborg War Machine, Space Pirate \nScience Side, Protagonists",
      true )
      .addField(
        "○ Esper Status",
        "Artificial Hybrid - Type II/III \nHyperspeed Transportation",
      true )
      .addField(
        "○ Additional info",
        "Uses Gear - Ecronus Excaliburum \nIntroduced - 2v2 arc")
      .setImage(SSWatermark);

    message.channel.send(CIdc).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
