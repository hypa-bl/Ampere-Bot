module.exports = {
  name: "troy",
  aliases: [ "yosef", "yusuf", "detective"], 
  description: "helpful guy",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote, SSlogoImg, SSWatermark } = require("../panties.json");
    
    try{
    const CItroy = new Discord.MessageEmbed()
    	.setColor(accent)
      .setTitle("**Troy Yosef**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail(SSlogoImg)
    	.addField(
        "○ General Info",
      	"35M, 5’11” \nDetective \nMagic Side, Support",
      true )
      .addField(
        "○ Esper Status",
        "N/A \nNot an Epser",
      true )
      .addField("○ Additional info",
                "Introduced - Conceptsquared Arc")
      .setImage(SSWatermark);

    message.channel.send(CItroy).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
