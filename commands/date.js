module.exports = {
  name: "date",
  description: "moment-based calendar embed",
  cooldown: 3,
  execute(message, args) {
    const Discord = require("discord.js");
    const moment = require("moment-timezone");
    const config = require("../panties.json");

    const accent = config.accent;
    const today = moment()
      .tz("Asia/Kolkata")
      .format(
        "[○ Today is **]Do[** of **]MMMM, YYYY[.** \n○ Day is **]dddd[** \n\n○ Days past new year - **]DDDD[**\n○ Weeks past new year - **]ww[**]"
      );

    const calendar = {
      color: accent,
      title: "Day and Date",
      description: today,
      footer: {
          text: "updates are IST based (GMT+5:30)",
          url: "https://i.imgur.com/nh3UYIL.png",
        },
      };

      /*
    const calendar = new Discord.RichEmbed()
      .setTitle("Day and Date")
      .setDescription(today)
      .setColor(accent)
      .setFooter(
        "updates are IST based (GMT+5:30)",
        "https://i.imgur.com/nh3UYIL.png"
      );
      */
    message.channel.send({ embed: calendar });
  }
};
