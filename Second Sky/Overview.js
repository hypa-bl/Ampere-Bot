module.exports = {
  name: "overview",
  description: "details for the charviewer",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote } = require("../panties.json");
    const ampere = new Discord.Client;
    try{
    const CIembed = new Discord.RichEmbed()
    	.setColor(accent)
      .setTitle("The Character Viewer")
      .setAuthor("Ampere")
      .setDescription(
        "The Character Viewer of Ampere bot allows users to view info on characters from the Second Sky Project. Only basic info is included. \nUse command `~charinfo (character name)` to access a specific character file. \nUse command `~map (region name)` to access either of the maps",
        true
      )
      .addField(
        "○ Available characters",
        "Ali, Amadeus, Ampere, Ben, Cassini, Conan, DC, Epsilon, Eric, Flint, Heather, Ilium, Ludwig, Marilyn, Mentalist, Mu, Noel, Ray, Roland, Summer, Tele, Walter, Winter"
      )
      .addField("○ Maps", "Refuge")
      .setFooter("Not all appearing characters are included.");

    message.channel.send(CIembed).then(sentMessage => {
      sentMessage.react(SSEmote);
    });} 
    catch(error){
      console.log(error);
    }
  }
};
