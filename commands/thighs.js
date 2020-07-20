module.exports = {
  name: "thighs",
  description: "a very cultured command that sends a random image of anime thighs",
  execute(message, args) {
    const rando_imgs = [
      "https://i.imgur.com/IODlWJ9.png",
      "https://i.imgur.com/TDjX1dV.png", 
      "https://i.imgur.com/UwoZNoU.png"
    ];
    message.channel.send("yes", {
      file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
    });
  },
};