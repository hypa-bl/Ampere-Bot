module.exports = {
  name: "noel",
  aliases: [ "nerd", "dropout"], 
  description: "helpful guy",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote, SSlogoImg, SSWatermark } = require("../panties.json");
  
    try{
    const CInoel = new Discord.MessageEmbed()
    	.setColor(accent)
      .setTitle("**Noel**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail(SSlogoImg)
    	.addField(
        "○ General Info",
      	"20M, 5’8” \nDropout \nScience Side, Support",
      true )
      .addField(
        "○ Esper Status",
        "N/A \nNot an Epser",
      true )
      .addField("○ Additional info",
                "Introduced - Pre-Switch")
      .setImage(SSWatermark);

    message.channel.send(CInoel).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
