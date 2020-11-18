module.exports = {
  name: "ali",
  aliases: ["crooke", "photographer", "cameraman"],
  description: "one of the few.",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSlogoImg, SSWatermark, SSEmote } = require("../panties.json");
    const ampere = new Discord.Client;
    
    try{
    const CIali = new Discord.MessageEmbed()
    	.setColor(accent)
      .setDescription("**Ali Crooke**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail(SSlogoImg)
    	.addField(
        "○ General Info",
      	"30M, 5'10” \nPhotographer \nScience Side, Support",
      true )
      .addField(
        "○ Esper Status",
        "N/A \nNot an Esper",
      true )
      .addField(
        "○ Additional info",
        "Uses Gear - Wayback Camera \nIntroduced - ???")
      .setImage(SSWatermark);

    message.channel.send(CIali).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
