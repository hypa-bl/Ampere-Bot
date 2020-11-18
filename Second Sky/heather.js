module.exports = {
  name: "heather",
  aliases: ["somnium", "16", "heater", "ava", "amelia"],
  description: "~charinfo Heather",
  execute(message, args) {
    const Discord = require("discord.js");
    const { SSWatermark, SSEmote } = require("../panties.json");
    
    try{
    const CIheather = new Discord.MessageEmbed()
    	.setColor("#f4ceb4")
      .setDescription("**Heather Somnium / Subject 16**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail("https://cdn.glitch.com/ee29e663-f1b1-4e9c-afb4-3143715f667e%2FHeatherCrop.png?v=1580118025413")
    	.addField(
        "○ General Info",
      	"16F, 5’7” \nHuman Experiments Survivor \nScience Side, Protagonists",
      true )
      .addField(
        "○ Esper Status",
        "Artificial - Type III \nWound Transfer / Death Swap",
      true )
      .addField(
        "○ Additional info",
        "Uses Gear - Nuclear Gauntlets + Hoop (post 2v2 arc) \nIntroduced - 2v2 Arc")
      .setImage(SSWatermark);

    message.channel.send(CIheather).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
