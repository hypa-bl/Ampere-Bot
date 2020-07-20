module.exports = {
  name: "lore",
  description: "sends a nice clickable embed of the timeline and lore document",
  aliases: ["timeline", "loredoc", "documentation"],
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSlogoImg, SSEmote } = require("../panties.json");
    
    const plotEmbed = new Discord.RichEmbed()
    .setColor(accent)
    .setAuthor("Google Docs")
    .setThumbnail(SSlogoImg)
    .setTitle("Lore and Timeline | Project Second Sky")
    .setDescription("File for documenting the events featured in the comic project in a timeline format, irrelevant to any spoiler elements for the current comic progress")
    .setURL("https://docs.google.com/document/d/1CwZI7NYQodbjatjWhoPmO6P9XJMabQyhtP-2UOSEc-4/edit?usp=drivesdk")
    .setFooter("Click on this embed to view.");
    
    message.channel.send(plotEmbed)
    .then(sentMessage => {
    sentMessage.react(SSEmote);
    });
  }
};