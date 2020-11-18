module.exports = {
  name: "mu",
  aliases: ["loli", "god", "goddess"],
  description: "~charinfo Mu",
  execute(message, args) {
    const Discord = require("discord.js");
    const { SSWatermark, SSEmote } = require("../panties.json");
    
    try{
    const CImu = new Discord.MessageEmbed()
    	.setColor("#cd595c")
      .setDescription("**Mu / Subject MU**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail("https://i.imgur.com/t4gXKud.jpg")
    	.addField(
        "○ General Info",
      	"6F, 3’5” \nHuman Experiments Survivor, Orphan \nMagic Side, Support",
      true )
      .addField(
        "○ Esper Status",
        "Artificial - Type III \nDevour",
      true )
      .addField(
        "○ Additional info",
        "Uses Gear - Epsilon's Back \nIntroduced? - Chapter 10~")
      .setImage(SSWatermark);

    message.channel.send(CImu).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
