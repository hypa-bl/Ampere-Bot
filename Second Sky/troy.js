module.exports = {
  name: "troy",
  aliases: [ "oculus", "detective"], 
  description: "helpful guy",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote, SSlogoImg, SSWatermark } = require("../panties.json");
    const ampere = new Discord.Client;
  
    try{
    const CItroy = new Discord.RichEmbed()
    	.setColor(accent)
      .setTitle("**Troy Oculus**")
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
    	.attachFiles([SSWatermark])
      .setImage("attachment://gqHWRVi.png");

    message.channel.send(CItroy).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
