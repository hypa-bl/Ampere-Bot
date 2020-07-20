module.exports = {
  name: "walter",
  aliases: [ "switch", "watchman" ],
  description: "one who technically topples off the balance",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote, SSlogoImg, SSWatermark } = require("../panties.json");
    const ampere = new Discord.Client;
  
    try{
    const CIwalter = new Discord.RichEmbed()
    	.setColor(accent)
      .setTitle("**Walter H. Watchman**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail(SSlogoImg)
    	.addField(
        "○ General Info",
      	"500+M, 4’4”  \nSwitch Scientist, FNAL Head \nScience Side, Antagonist",
      true )
      .addField(
        "○ Esper Status",
        "N/A \nNot an Esper",
      true )
      .addField("○ Additional info",
                "Introduced - ??")
    	.attachFiles([SSWatermark])
      .setImage("attachment://gqHWRVi.png");

    message.channel.send(CIwalter).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
