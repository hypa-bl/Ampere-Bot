module.exports = {
  name: "marilyn",
  aliases: [ "sis", "blondie"], 
  description: "lil sis of Epsilon",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote, SSlogoImg, SSWatermark } = require("../panties.json");
    const ampere = new Discord.Client;
  
    try{
    const CImarilym = new Discord.RichEmbed()
    	.setColor(accent)
      .setTitle("**Isaac Marilyn**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail(SSlogoImg)
    	.addField(
        "○ General Info",
      	"17F, 5’5” \nStudent \nScience Side, Support",
      true )
      .addField(
        "○ Esper Status",
        "N/A \nNot an Epser",
      true )
      .addField("○ Additional info",
                "Introduced - Pre Switch")
    	.attachFiles([SSWatermark])
      .setImage("attachment://gqHWRVi.png");

    message.channel.send(CImarilyn).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
