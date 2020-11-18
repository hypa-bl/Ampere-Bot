module.exports = {
	name: 'lmao',
	description: 'might be a but annoying but someone asked for it',
	cooldown: 1,
	execute(message, args) {
		const responseArray = [
			'lmao gottem',
			'nice',
			'ha',
			'ayy',
			'lmoa',
			'<a:goos:774020452959911956>'
		];

		const shuffle = [Math.floor(Math.random() * responseArray.length)];

		message.channel.send(responseArray[shuffle]);
	}
};
