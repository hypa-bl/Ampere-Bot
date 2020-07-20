module.exports = {
  name: "example",
  description: "example embed for the charviewer",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote, SSLogoImg, SSWatermark } = require("../panties.json");
    const ampere = new Discord.Client;
  
    try{
    const CIembed = new Discord.RichEmbed()
    	.setColor(accent)
      .setTitle("Name of character")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail(SSLogoImg)
    	.addField(
        "○ General Info",
      	"00MF, 0’0” \nOccupation \nSciMag Side, Role",
      true )
      .addField(
        "○ Esper Status",
        "P/N/NA \nAbility",
      true )
      .addField("○ Additional info", "Uses Gear? \nIntroduced - Chapter / Arc")
    	.attachFiles([SSWatermark])
      .setImage("attachment://gqHWRVi.png");

    message.channel.send(CIembed).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
