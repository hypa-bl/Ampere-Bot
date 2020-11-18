module.exports = {
  name: "overview",
  description: "details for the charviewer",
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSEmote } = require("../panties.json");
    
   try{
    const OverviewEmbed = {
color:accent,
title: "The Character Viewer",
author:{
  name: "Ampere",
},
description: "The Character Viewer of Ampere bot allows users to view info on characters from the Second Sky Project. Only basic info is included. \nUse command `~charinfo (character name)` to access a specific character file. \nUse command `~map (region name)` to access either of the maps.",
fields: [
  {
    name:"○ Available characters",
    value:"Ali, Amadeus, Ampere, Ben, Cassini, Conan, DC, Epsilon, Eric, Flint, Heather, Ilium, Ludwig, Marilyn, Mentalist, Mu, Noel, Ray, Roland, Summer, Tele, Walter, Winter",
  },
  {
    name:"○ Maps",
    value:"Refuge",
    inline: false,
  },
],
footer: {
  text:"Not all appearing characters are included.",
},
}
    message.channel.send({ embed: OverviewEmbed });
    }
    catch (error) {
      console.log("your overviewEmbed just shat its pants -" + error);
    }
  }
};
