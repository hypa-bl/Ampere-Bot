module.exports = {
	name: 'nom',
	description: 'nom emote',
	cooldown: '1',
	execute(message, args) {
		const nomA = 'nom:774004554119381014';
		const nomB = 'nomB:774025025258651659';

		const nomArray = [nomA, nomB];

		const nomMix = [Math.floor(Math.random() * nomArray.length)];

		message.channel.send(`<a:${nomArray[nomMix]}>`);
	}
};
