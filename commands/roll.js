module.exports = {
	name: 'roll',
	aliases: ['dice', 'random'],
	description: 'includes information about bot',
	execute(message, args) {
	var response = [Math.floor(Math.random() * ((6 - 1) + 1) + 1)];

	  message.channel.send(`you got ${response}`);
	  
	}}