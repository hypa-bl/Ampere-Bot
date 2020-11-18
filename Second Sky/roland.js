module.exports = {
  name: "roland",
  aliases: [ "bose", "rolanf" ],
  description: "guy who brings the fleet",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote, SSlogoImg, SSWatermark } = require("../panties.json");
    
    try{
    const CIroland = new Discord.MessageEmbed()
    	.setColor(accent)
      .setTitle("**Roland**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail(SSlogoImg)
    	.addField(
        "○ General Info",
      	"28M, 6’4” \nExperimentation Subject \nScience Side, Support",
      true )
      .addField(
        "○ Esper Status",
        "N/A \nNot an Esper",
      true )
      .addField("○ Additional info",
                "Introduced - ??")
      .setImage(SSWatermark);

    message.channel.send(CIroland).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
