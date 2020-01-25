const Discord = require('discord.js');
const { prefix, token } = require('auth.json');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('what’s popping?');
	} else if (command === 'ayy') {
		message.channel.send('lmao');
	}
