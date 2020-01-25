//loading up the libs
const Discord = require('discord.js');
const { prefix, token } = require('auth.json');

//creating a new client
const client = new Discord.Client();

//sending message to log when ready
//once means this is only going to run on startup
client.once('ready', () => {
	console.log('booting~');
});

client.login = auth.token;

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('what’s popping?');
	} else if (command === 'ayy') {
		message.channel.send('lmao');
	}
