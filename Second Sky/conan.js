module.exports = {
  name: "conan",
  aliases: [ "ghost", "hanako" ],
  description: "An apparition. One of its kind",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote, SSlogoImg, SSWatermark } = require("../panties.json");
    const ampere = new Discord.Client();
  
    try{
    const CIconan = new Discord.MessageEmbed()
    	.setColor(accent)
      .setTitle("**Conan**")
      .setAuthor("Character Viewer | Project Second Sky")
    	.setThumbnail(SSlogoImg)
    	.addField(
        "○ General Info",
      	"300+M, 5’3” \nNecromancer's Greatest Creation \nMagic Side, Support",
      true )
      .addField(
        "○ Esper Status",
        "Apparition \nMindplay",
      true )
      .addField("○ Additional info",
                "\nIntroduced - ??")
      .setImage(SSWatermark);

    message.channel.send(CIconan).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
