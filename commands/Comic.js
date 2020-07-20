module.exports = {
  name : "comic", 
  aliases : ["webcomic", "webtoon", "meat" ], 
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote } = require("../panties.json");
    
    try {
  	const ComicEmbed = new Discord.RichEmbed()
    .setColor(accent)
    .setAuthor("Line Webtoon")
    .setTitle("Comic | Project Second Sky")
    .setDescription("Read the comic on Webtoon Canvas!")
    .setThumbnail("https://i.imgur.com/fHELRy7.png")
    .setURL("https://www.webtoons.com/en/challenge/project-second-sky/list?title_no=410260")
    .setFooter("Click or tap on this embed to view.");
    
    message.channel.send(ComicEmbed)
    .then(msg => {
      msg.react(SSEmote);
    });
	}
  catch {
    console.log("command failed!");
  }
}};