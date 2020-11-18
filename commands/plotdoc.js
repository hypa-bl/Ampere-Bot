module.exports = {
  name: "plotdoc",
  description: "sends a nice clickable embed of the plot document",
  aliases: ["document", "plot", "documentation"],
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSlogoImg, SSEmote } = require("../panties.json");

   try{
    const plotEmbed = {
color:accent,
title: "Plot | Project Second Sky",
url:"https://docs.google.com/document/d/1trUqg8XsfQ7-eGIhEtcvyyH1ORVFn6XeZkN8yHSMCCg/edit?usp=drivesdk",
author:{
  name: "Google Docs",
},
description: "File for documenting the elements featured in the comic project, including a list of characters and storylines for each chapter.",
thumbnail:SSlogoImg,
footer: {
  text:"Click on this embed to view.",
},
}
    message.channel.send({ embed: plotEmbed });
    }
    catch (error) {
      console.log("your plotembed just shat its pants " + error);
    }
  }
};