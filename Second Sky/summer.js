module.exports = {
  name: "summer",
  description: "fiery lad",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote, SSLogoImg, SSWatermark } = require("../panties.json");
    const ampere = new Discord.Client;
  
    try{
    const CIsummer = new Discord.RichEmbed()
    	.setColor("#e7debc")
      .setTitle("**Summer**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail("https://i.imgur.com/74YF0xh.png")
    	.addField(
        "○ General Info",
      	"22F, 5’11” \nEsper Researcher \nScience Side, Support",
      true )
      .addField(
        "○ Esper Status",
        "N/A \nNot an esper",
      true )
      .addField("○ Additional info",
                "Introduced - Paper Factory Arc")
    	.attachFiles([SSWatermark])
      .setImage("attachment://gqHWRVi.png");

    message.channel.send(CIsummer).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
