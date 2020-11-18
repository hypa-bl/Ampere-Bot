module.exports = {
  name: "ludwig",
  aliases: [ "gramps", "bell2"], 
  description: "old man",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote, SSlogoImg, SSWatermark } = require("../panties.json");
    
    try{
    const CIludwig = new Discord.MessageEmbed()
    	.setColor(accent)
      .setTitle("**Ludwig Bell**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail(SSlogoImg)
    	.addField(
        "○ General Info",
      	"(Late) 85M, 5’5” \nBlacksmith \nMagic Side, Support",
      true )
      .addField(
        "○ Esper Status",
        "Natural \nVibration Control",
      true )
      .addField("○ Additional info",
                "Introduced - Pre Switch")
      .setImage(SSWatermark);

    message.channel.send(CIludwig).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
