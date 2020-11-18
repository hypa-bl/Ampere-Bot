module.exports = {
  name: "lore",
  description: "sends a nice clickable embed of the timeline and lore document",
  aliases: ["timeline", "loredoc", "documentation"],
  execute(message, args) {
    const Discord = require("discord.js");
    const { accent, SSlogoImg, SSEmote } = require("../panties.json");

try{
    const loreEmbed = {
color:accent,
title: "Lore and Timeline | Project Second Sky",
url:"https://docs.google.com/document/d/1CwZI7NYQodbjatjWhoPmO6P9XJMabQyhtP-2UOSEc-4/edit?usp=drivesdk",
author:{
  name: "Google Docs",
},
description: "File for documenting the events featured in the comic project in a timeline format, irrelevant to any spoiler elements for the current comic progress",
thumbnail:SSlogoImg,
footer: {
  text:"Click on this embed to view.",
},
}
    message.channel.send({ embed: loreEmbed });
    }
    catch (error) {
      console.log("your loreembed just shat its pants " + error);
  }
}};