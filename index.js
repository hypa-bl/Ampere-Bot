//loading up the libs
const Discord = require('discord.js');

//libs for creating logs
var logger = require('winston');

client.login = ('NjcwNTAzMDM4MjA4OTY2NjY3.XivWrA.KkQnOXpM015QgP2Tb6lAWn1Cf5o');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, { colorize: true });
logger.level = 'debug';

//creating a new client
const client = new Discord.Client();

//sending message to log when ready
//once means this is only going to run on startup
client.once('ready', () => {
	console.log('booting~');
});

//reading messages
client.on('message', message => {
	console.log(message.content);
});


if (message.content === 'kil') {
	// send back "no" to the channel the message was sent in
	message.channel.send('no');
}


client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('what’s popping?');
	} else if (command === 'ayy') {
		message.channel.send('lmao');
	}
