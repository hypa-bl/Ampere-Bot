module.exports = {
  name: "plotdoc",
  description: "sends a nice clickable embed of the plot document",
  aliases: ["document", "plot", "documentation"],
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSlogoImg, SSEmote } = require("../panties.json");
    
    const plotEmbed = new Discord.RichEmbed()
    .setColor(accent)
    .setAuthor("Google Docs")
    .setThumbnail(SSlogoImg)
    .setTitle("Plot | Project Second Sky")
    .setDescription("File for documenting the elements featured in the comic project, including a list of characters and storylines for each chapter.")
    .setURL("https://docs.google.com/document/d/1trUqg8XsfQ7-eGIhEtcvyyH1ORVFn6XeZkN8yHSMCCg/edit?usp=drivesdk")
    .setFooter("Click on this embed to view.");
    
    message.channel.send(plotEmbed)
    .then(sentMessage => {
    sentMessage.react(SSEmote);
    });
  }
};