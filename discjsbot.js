//loading our libs + prefix + token and giving our client a name and version
const Discord = require('discord.js');
const config = require("./config.json");
const TOKEN = process.env.TOKEN;
const ampere = new Discord.Client();
const version = "1.1.7";

ampere.login(TOKEN);

//create logs on startup
ampere.on('ready', () => {
  	console.log(`using discord.js instead of discord.io`)
  	console.log(`booting`)
    console.info(`Logged in as ${ampere.user.tag}!`);
});

//responses that deploy on user input
ampere.on("message", (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("what’s popping?");
  }
  else
  if (message.content.startsWith(config.prefix + "beep")) {
    message.channel.send("bop");
  }
  else
  if (message.content.startsWith(config.prefix + "peace")){
    message.channel.send("peas", {
      files: ["https://i.imgur.com/TvdChAX.jpg"]
    });
  }
  else
  if (message.content == "ayy") {
    message.channel.send("lmao");
  }
  else
  if (message.content.includes (" kil")) {
    message.channel.send("no");
  }
  
//Important
  else
  if (message.content.startsWith(config.prefix + "changelog")) {
const ChangelogEmbed = new Discord.RichEmbed()
    .setColor('#f58164')
    .setAuthor('Ampere bot | changelog')
    .addField(version,'- Updated Charinfo \n- info for Epsilon and Ilium now available \n- Changelog now uses RichEmbed \n- kil command now works in-sentence, though it is still not set to avoid a bot response if kil is part of a larger word in the message', true)
    .setTimestamp()
    .setFooter('Ampere bot by hypa.');
    
    message.channel.send(ChangelogEmbed);
  }

  else
  if (message.content.startsWith(config.prefix + "info")) {
    
    const InfoEmbed = new Discord.RichEmbed()
		.setColor('#f58164')
    .setTitle('Ampere bot | by hypa.')
    .setAuthor('Ampere')
    .setThumbnail(ampere.user.avatarURL)
    .setDescription('Coded exclusively for the Second Sky Server.')
    .addField('prefix commands [~] | text and images','ping, info, beep, changelog, peace')
    .addField('non-prefix commands','ayy, kil')
    .addField('Special prefix command','use `~charinfo overview`  to access the character info files of listed characters from Second Sky!')
    .setTimestamp()
    .setFooter(version + 'use changelog command to see changes', ampere.user.avatarURL);

   message.channel.send(InfoEmbed);
  }
});


//The Character info segment.
//-----------------------------

ampere.on("message",(message) => {

if (message.author.bot) return;

if (message.content == config.prefix + "charinfo") {
  message.channel.send("use the command followed with **(character name)**, or use `~charinfo overview` if confused about names!");
}
  
//overview command
else
if (message.content.startsWith(config.prefix + "charinfo overview")) {

const CIoverview = new Discord.RichEmbed()
		.setColor('#f58164')
    .setTitle('The Character Viewer')
    .setAuthor('Ampere')
    .setDescription('The character viewer of Ampere bot allows users to view info on characters in the Second Sky Project. Only basic info is included, please refer to plot document or inquire the writers for more info. \nUse command ~charinfo (character name) to access a specific character file.', true)
    .addField('Available Characters','Epsilon, Ilium, Heather, DC, Amadeus')
    .setTimestamp()
    .setFooter('Ampere bot by hypa.');

   message.channel.send(CIoverview);
	}
//Epsilon 
else  
if (message.content.startsWith(config.prefix + "charinfo Epsilon")) {
  
const CIepsilon = new Discord.RichEmbed()
		.setColor('#e9c081')
		.setTitle('Isaac Epsilon')
		.setAuthor('Character Viewer | Project Second Sky')
		.setThumbnail('https://i.imgur.com/KiB31Od.jpg') 
		.addField('General Info', '20M, 5’8” \nStudent \nScience Side, Protagonists', true)
		.addField('Esper Status', 'Potential \nUnidentified', true)
		.addField('Additional Info', 'Uses Gear - The Conceptsquared \nIntroduced - Chapter 01');
  
	 message.channel.send(CIepsilon);
}
//Ilium
else
if (message.content.startsWith(config.prefix + "charinfo Ilium" || config.prefix + "charinfo ilium" || config.prefix + "charinfo Bell" || config.prefix + "charinfo bell")) {

const CIilium = new Discord.RichEmbed()
		.setColor('#405469')
		.setTitle('Ilium Bell')
		.setAuthor('Character Viewer | Project Second Sky')
		.setThumbnail('https://i.imgur.com/hpkGZUG.png')
		.addField('General Info', '20F, 5’6” \nStudent \nMagic Side, Protagonists', true)
		.addField('Esper Status', 'Potential \nVibration Control',true)
		.addField('Additional Info', 'Uses Gear - Broken Sword \nIntroduced - Chapter 01');
  
  message.channel.send(CIilium);
}
//Heather
else
if (message.content.startsWith(config.prefix + "charinfo Heather" || config.prefix + "charinfo heather" || config.prefix + "charinfo Subject 16" ||  config.prefix + "charinfo 16" )) {

const CIheather = new Discord.RichEmbed()
		.setColor('#f4ceb4')
		.setTitle('Heather Somnium / Subject 16')
		.setAuthor('Character Viewer | Project Second Sky')
		.setThumbnail('https://cdn.glitch.com/ee29e663-f1b1-4e9c-afb4-3143715f667e%2FHeatherCrop.png?v=1580118025413')
		.addField('General Info', '16F, 5’7” \nHuman Experiments Survivor \nScience Side, Protagonists', true)
		.addField('Esper Status', 'Artificial - Type III \nDeath Swap / Wound Transer',true)
		.addField('Additional Info', 'Uses Gear - Nuclear Gauntlets + Hoop \nIntroduced? - 2v2 Arc~');
  
  message.channel.send(CIheather);
}
//dc
else
if (message.content.startsWith(config.prefix + "charinfo DC" || config.prefix + "charinfo dc" || config.prefix + "charinfo omu" || config.prefix + "charinfo Omni")) {
  
const CIdc = new Discord.RichEmbed()
		.setColor('#f4ceb4')
		.setTitle('Porcine Omni / DC')
		.setAuthor('Character Viewer | Project Second Sky')
		.setThumbnail('https://i.imgur.com/nwEYz4z.png')
		.addField('General Info', '16M, 5’10” \nCyborg War Machine, Space Pirate \nScience Side, Protagonists', true)
		.addField('Esper Status', 'Artificial - Type II \nHyperspeed Transportaion',true)
		.addField('Additional Info', 'Uses Gear - Nuclear Rocket Fueled Sword \nIntroduced? - 2v2 Arc~');
  
  message.channel.send(CIdc);
}
//Amadeus
else  
if (message.content.startsWith(config.prefix + "charinfo Amadeus")) {
  
const CIama = new Discord.RichEmbed()
		.setColor('#97a6bd')
		.setTitle('Amadeus')
		.setAuthor('Character Viewer | Project Second Sky')
		.setThumbnail('https://i.imgur.com/pAsSbEl.png') 
		.addField('General Info', '26F, 5’11” \nTeacher + Init Defensive Unit \nScience Side, Support', true)
		.addField('Esper Status', 'N/A \nNot an Esper', true)
		.addField('Additional Info', 'Uses Gear - Taser Baton + Collapsible Riot Shield \nIntroduced - Chapter 01');
  
	 message.channel.send(CIama);
}
});
