module.exports = {
  name: "ray",
  aliases: [ "leyet", "cherry"], 
  description: "Ilium's second upgrade package",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote, SSlogoImg, SSWatermark } = require("../panties.json");
    const ampere = new Discord.Client;
  
    try{
    const CIflint = new Discord.RichEmbed()
    	.setColor(accent)
      .setTitle("**Ray Leyet**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail(SSlogoImg)
    	.addField(
        "○ General Info",
      	"21F, 5’4” \nOutlaw / FNAL Cleanup Squad \nScience Side, Antagonist",
      true )
      .addField(
        "○ Esper Status",
        "Natural \nExtended Sight",
      true )
      .addField("○ Additional info",
                "Introduced - Factory Arc")
    	.attachFiles([SSWatermark])
      .setImage("attachment://gqHWRVi.png");

    message.channel.send(CIflint).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
