module.exports = {
  name: "eric",
  aliases: [ "replicator", "marshall" ],
  description: "There he is. The big bad. Or is he?",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote, SSlogoImg, SSWatermark } = require("../panties.json");
    const ampere = new Discord.Client;
  
    try{
    const CIeric = new Discord.RichEmbed()
    	.setColor(accent)
      .setTitle("**Eric Marshall**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail(SSlogoImg)
    	.addField(
        "○ General Info",
      	"500+M, 6’1” (without armour), 7’2” (with armour)  \nFNAL Head \nScience Side, Antagonist",
      true )
      .addField(
        "○ Esper Status",
        "Natural + Artificial Hybrid \nFragmentation",
      true )
      .addField("○ Additional info",
                "Uses Gear - Suitcase with Spare Body + Vince's Gear \nIntroduced - ??")
    	.attachFiles([SSWatermark])
      .setImage("attachment://gqHWRVi.png");

    message.channel.send(CIeric).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
