module.exports = {
  name: "mentalist",
  aliases: [ "observer", "watcher" ],
  description: "She watches.",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote, SSlogoImg, SSWatermark } = require("../panties.json");
    const ampere = new Discord.Client;
  
    try{
    const CImentalist = new Discord.RichEmbed()
    	.setColor(accent)
      .setTitle("**Unnamed Mentalist**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail(SSlogoImg)
    	.addField(
        "○ General Info",
      	"???F, 7’1” \nThe one who watches \nScience Side, Observer",
      true )
      .addField(
        "○ Esper Status",
        "Natural \nIllusion and dimension creation",
      true )
      .addField("○ Additional info",
                "Introduced - ???")
    	.attachFiles([SSWatermark])
      .setImage("attachment://gqHWRVi.png");

    message.channel.send(CImentalist).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
