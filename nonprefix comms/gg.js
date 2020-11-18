module.exports = {
	name: 'gg',
	description: 'gg',
	cooldown: 1,
	execute(message, args) {
		const A = 'gg <a:kitty:774029800188280862>';
		const B = 'gg <a:walkin:774035135049891910>';
		const C = 'gg <a:diamondsyee:774031445823586345>';
		const D = '<a:cuddleL:774035239605239840><a:cuddleR:774035310619131934>';

		const ggArray = [A, B, C, D];

		const Shuffle = [Math.floor(Math.random() * ggArray.length)];

		message.channel.send(ggArray[Shuffle]);
	}
};
