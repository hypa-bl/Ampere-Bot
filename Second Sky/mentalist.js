module.exports = {
  name: "mentalist",
  aliases: [ "observer", "watcher", "shaak", "chuuni", "chuni", "chüni" ],
  description: "She watches.",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote, SSlogoImg, SSWatermark } = require("../panties.json");
    
    try{
    const CImentalist = new Discord.MessageEmbed()
    	.setColor(accent)
      .setTitle("**Shaak Chüni**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail("https://i.imgur.com/uLFKsww.jpg")
    	.addField(
        "○ General Info",
      	"???F, 7’1” \nThe one who watches \nScience Side, Observer",
      true )
      .addField(
        "○ Esper Status",
        "Natural \nIllusion and dimension creation",
      true )
      .addField("○ Additional info",
                "Introduced - Chapter 1, Part 4")
      .setImage(SSWatermark);

    message.channel.send(CImentalist).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
