module.exports = {
  name: "ben",
  aliases: [ "benjamin", "theodore" ],
  description: "Someone you wouldn't usually expect to exist",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote, SSlogoImg, SSWatermark } = require("../panties.json");
    const ampere = new Discord.Client;
  
    try{
    const CIben = new Discord.RichEmbed()
    	.setColor(accent)
      .setTitle("**Benjamin Theodore**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail(SSlogoImg)
    	.addField(
        "○ General Info",
      	"20M, 5’10” \nUnhandled Exception \nScience Side, Support",
      true )
      .addField(
        "○ Esper Status",
        "Natural \nMirrored Dimension Access",
      true )
      .addField("○ Additional info",
                "Introduced - ???")
    	.attachFiles([SSWatermark])
      .setImage("attachment://gqHWRVi.png");

    message.channel.send(CIben).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
