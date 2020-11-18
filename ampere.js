//loading our libraries
require("dotenv").config();
var token = process.env.TOKEN;
const Discord = require("discord.js");
const fs = require("fs");
const { prefix, SSpre, pfp, version } = require("./panties.json");
const moment = require("moment-timezone");


let ampere, client;
client = ampere = new Discord.Client();

//setting up the commands from files
ampere.commands = new Discord.Collection();
ampere.npcommands = new Discord.Collection();
ampere.SScommands = new Discord.Collection();
const cooldowns = new Discord.Collection();


const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));

const noncomFiles = fs
  .readdirSync("./nonprefix comms")
  .filter(file => file.endsWith(".js"));

const SecondSkyFiles = fs
  .readdirSync("./Second Sky")
  .filter(file => file.endsWith(".js"));


for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  ampere.commands.set(command.name, command);
}

for (const file of noncomFiles) {
  const command = require(`./nonprefix comms/${file}`);
  ampere.npcommands.set(command.name, command);
}

for (const file of SecondSkyFiles) {
  const command = require(`./Second Sky/${file}`);
  ampere.SScommands.set(command.name, command);
}

//keeping the bot alive
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
  let ConsoleDate = moment()
    .tz("Asia/Kolkata")
    .format("MMM Do, h:mm:ss a");
  console.log(`last updated > ${ConsoleDate}`);
  response.sendStatus(200);
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));

//time based stuff
const date = moment()
  .tz("Asia/Kolkata")
  .format("MMM Do, h:mm:ss a");


//boot
ampere.login(token);
ampere.once("ready", () => {
  ampere.user.setActivity(version + " | ~info");
  //ampere.user.setAvatar(pfp);
  console.log("discord.js");
  console.log(`Ampere ${version}`);
  console.log("booting");
  console.log(date);
  console.info(`Logged in as ${ampere.user.tag}.`);
});

//responses that deploy on user input
//———————————————————————————————————————-—
// with prefix
ampere.on("message", async message => {
  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (message.author.bot) return;
	if (message.content.startsWith(prefix)) {
  
  const commandcheck =
    ampere.commands.get(commandName) ||
    ampere.commands.find(
      cmd => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!commandcheck) return;

  try {
    commandcheck.execute(message, args);
  } catch (error) {
    console.error(error);
  }}
});
//——————————————————————————————————————
// with charinfo prefix, Second Sky based
ampere.on("message", async message => {
  const args = message.content.slice(SSpre.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  
  if (message.author.bot) return;
  if (message.content.startsWith(SSpre)) {

  const SScommandcheck =
    ampere.SScommands.get(commandName) ||
    ampere.SScommands.find(
      cmd => cmd.aliases && cmd.aliases.includes(commandName)
    );
    
  	if (SScommandcheck) {
    SScommandcheck.execute(message, args);
  }}
 });
//——————————————————————————————————————
// without prefix
ampere.on("message", async message => {
  const args = message.content.split(/ +/);
  const commandName = args
    .toString()
    .toLowerCase()
    .replace(/,/g, " ");

  if (message.author.bot) return;

  const npcommcheck =
    ampere.npcommands.get(commandName) ||
    ampere.npcommands.find(
      cmd => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!npcommcheck) return;
  
  //Cooldown Check

  if (!cooldowns.has(npcommcheck.name)) {
	cooldowns.set(npcommcheck.name, new Discord.Collection());
}

const now = Date.now();
const timestamps = cooldowns.get(npcommcheck.name);
const cooldownAmount = (npcommcheck.cooldown || 1) * 1000;

if (timestamps.has(message.author.id)) {
	const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

	if (now < expirationTime) {
		const timeLeft = (expirationTime - now) / 1000;
		return;
	}
} 

timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

//Cooldowns end
  
  
  try {
    npcommcheck.execute(message, args);
  } catch (error) {
    console.error(error);
  }
});
//———————————————————————————————————————
// non-prefix inclusive commands
ampere.on("message", async message => {
  //kil
  if (message.content.includes(" kil") && !message.content.includes("kill")) {
    message.channel.send("no");
  }
  //pirate
  else if (message.content.includes("pirate")) {
    message.channel.send("arr").then(msg => {
      msg.delete({ timeout:1000 });
    });
  }
  //yoda
  else if (message.content.includes("yoda")) {
    message.channel.send("mmmm ketamine").then(msg => {
      msg.delete({ timeout:1000 });
    });
  }
  //hypa?
  else if (message.content.includes("hypa")) {
    let ampereclient = message.channel.client;
    let hypa = ampereclient.users.fetch("401356535143333908").then(hypa => {
      hypa.send("phone ring");
    });
  }
});

process.on("unhandledRejection", error => {
  console.error("Unhandled promise rejection occured: ", error);
});

//end
