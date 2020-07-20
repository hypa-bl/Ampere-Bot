module.exports = {
  name: "winter",
  description: "fiery lad",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote, SSLogoImg, SSWatermark } = require("../panties.json");
    const ampere = new Discord.Client;
  
    try{
    const CIwinter = new Discord.RichEmbed()
    	.setColor("#e7debc")
      .setTitle("**Winter**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail("https://i.imgur.com/2ONhni6.png")
    	.addField(
        "○ General Info",
      	"22F, 5’8” \nEsper Researcher \nScience Side, Support",
      true )
      .addField(
        "○ Esper Status",
        "Gifted \nAquatic Pyrokinesis",
      true )
      .addField("○ Additional info",
                "Introduced - ConceptSquared Arc")
    	.attachFiles([SSWatermark])
      .setImage("attachment://gqHWRVi.png");

    message.channel.send(CIwinter).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
