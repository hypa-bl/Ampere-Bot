module.exports = {
  name: "peace",
  description: "sends goose image",
  execute(message, args) {
    message.channel.send("peas", {
  files: ["https://i.imgur.com/TvdChAX.jpg"]
    });
  }
};