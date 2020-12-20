module.exports = {
	name: 'emote',
	description: 'returns given string under colons. Used for? animated emotes.',
	aliases: ['emoji'],
	execute(message, args) {
		var argument = message.content.slice(7);

		if (argument.includes(' ')) {
			var arrays = argument.split(' ');
			var result = arrays.map(item => {
				return ' :' + item + ': ';
			});
			message.channel.send(result)
		}
		else 
		message.channel.send(`:${argument}:`);
	}
};
