module.exports = {
  name: "winter",
  description: "fiery lad",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote, SSLogoImg, SSWatermark } = require("../panties.json");
  
    try{
    const CIwinter = new Discord.MessageEmbed()
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
      .setImage(SSWatermark);

    message.channel.send(CIwinter).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
