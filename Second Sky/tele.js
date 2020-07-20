module.exports = {
  name: "tele",
  description: "courtesy of Fox",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote, SSLogoImg, SSWatermark } = require("../panties.json");
    const ampere = new Discord.Client;
  
    try{
    const CItele = new Discord.RichEmbed()
    	.setColor(accent)
      .setTitle("**Tele**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail("https://i.imgur.com/yeRXAf8.png")
    	.addField(
        "○ General Info",
      	"20F, 5’11” \nOrthodox Tele Promishlens Head \nScience Side, Support",
      true )
      .addField(
        "○ Esper Status",
        "N/A \nNot an Esper",
      true )
      .addField("○ Additional info",
                "Introduced - ??")
    	.attachFiles([SSWatermark])
      .setImage("attachment://gqHWRVi.png");

    message.channel.send(CItele).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
