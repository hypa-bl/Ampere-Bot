module.exports = {
  name: "gopnik",
  description: "sends images of people in adidas suits squatting",
  cooldown: 3,
  execute(message, args) {
    const rando_gop = [
      "https://i.imgur.com/chLyxsY.jpg", 
      "https://i.imgur.com/IODlWJ9.jpg", 
      "https://i.imgur.com/b9iv5aE.jpg"
    ];
    message.channel.send("cyka", {
      file:rando_gop[Math.floor(Math.random() * rando_gop.length)]
    });
  }
};