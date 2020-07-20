module.exports = {
  name: "info",
  aliases: ["help", "ampere"], 
  description: "includes information about bot",
  execute(message, args) {
    const Discord = require("discord.js");
    const config = require("../panties.json");
    const moment = require("moment-timezone");
    const ampere = new Discord.Client;
    const pfp = config.pfp;
    const accent = config.accent;
    const version = config.version;
    const LogoEmote = config.SSEmote;
    const date = moment()
    		.tz("Asia/Kolkata")
    		.format("MMM Do, h:mm:ss a") + " IST";
    
    try{
    const infoEmbed = new Discord.RichEmbed()
    .setTitle("Ampere bot | by hypa.")
    .setAuthor("Info")
    .setColor(accent)
    .setThumbnail(pfp)
    .setDescription("Crafted for the Second Sky server.")
    .addField("○ prefix commands [~] | text and images",
              "info, ping, beep, date")
    .addField("○ non-prefix commands",
              "ayy, kil, yuh, gg, understandable, uh oh, amen")
    .addField("○ special prefix commands",
              "use `~charinfo overview` to access the character info files of listed characters from Project Second Sky!")
    .setFooter(
    version + " Last boot : " + date,
    pfp);
      
    message.channel.send(infoEmbed)
    .then(sentMessage => {
      sentMessage.react(LogoEmote);
    });
    }
    catch (error) {
      console.log("your infoembed just shat its pants " + error);
    }
  }
};