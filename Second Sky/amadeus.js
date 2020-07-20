module.exports = {
  name: "amadeus",
  aliases: ["ama", "baton"],
  description: "~charinfo Amadeus",
  execute(message, args) {
    const Discord = require("discord.js");
    const { SSWatermark, SSEmote } = require("../panties.json");
    const ampere = new Discord.Client;
    
    try{
    const CIama = new Discord.RichEmbed()
    	.setColor("#97a6bd")
      .setDescription("**Amadeus**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail("https://i.imgur.com/pAsSbEl.png")
    	.addField(
        "○ General Info",
      	"26F, 5’11” \nTeacher / Init Defense Unit 7 Supervisor \nScience Side, Support",
      true )
      .addField(
        "○ Esper Status",
        "N/A \nNot an Esper",
      true )
      .addField(
        "○ Additional info",
        "Uses Gear - Taser Baton + Collapsible Riot Shied \nIntroduced - Chapter 01")
    	.attachFiles([SSWatermark])
      .setImage("attachment://gqHWRVi.png");

    message.channel.send(CIama).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
