module.exports = {
  name: "mu",
  aliases: ["loli", "god", "goddess"],
  description: "~charinfo Mu",
  execute(message, args) {
    const Discord = require("discord.js");
    const { SSWatermark, SSEmote } = require("../panties.json");
    const ampere = new Discord.Client;
    
    try{
    const CImu = new Discord.RichEmbed()
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
    	.attachFiles([SSWatermark])
      .setImage("attachment://gqHWRVi.png");

    message.channel.send(CImu).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
