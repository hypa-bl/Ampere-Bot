module.exports = {
  name: "flint",
  aliases: [ "ensteel", "traitor"], 
  description: "Ilium's second upgrade package",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote, SSlogoImg, SSWatermark } = require("../panties.json");
    const ampere = new Discord.Client;
  
    try{
    const CIflint = new Discord.RichEmbed()
    	.setColor(accent)
      .setTitle("**Flint**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail(SSlogoImg)
    	.addField(
        "○ General Info",
      	"22M, 5’9” \nOutlaw / FNAL Cleanup Squad \nScience Side, Antagonist",
      true )
      .addField(
        "○ Esper Status",
        "Natural \nRefraction Index Control",
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
