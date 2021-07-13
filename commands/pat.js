module.exports = {
  name: "pat", 
  description: "headpats yes", 
  aliases: ["headpat", "confirm"], 
  
  execute(message, args) {
    let pats = [
      "<a:patbearB:798845977028460574>",
      "<a:paimonpat:798846150706200597>", 
      "<a:catpat:798846320626499615>"
    ];
    
    let shuffle = [Math.floor(Math.random() * pats.length)];
    
    message.channel.send(pats[shuffle]);
  }
};