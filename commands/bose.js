module.exports = {
	name: 'bose',
	description:
		'a very cultured command that sends a random image of anime thi- I mean Subhas Chandra Bose',
	execute(message, args) {
		const Discord = require('discord.js');
		const images = [
			'https://media.discordapp.net/attachments/673567738307936292/769605957936087082/814102-zcocelaeqh-1471455406.jpeg',
			'https://media.discordapp.net/attachments/673567738307936292/769606049450688512/biplan.jpg',
			'https://media.discordapp.net/attachments/673567738307936292/769606334643306506/ok_nice_underchin.jpg',
			'https://media.discordapp.net/attachments/673567738307936292/769606365760454656/oh_goddamn.jpeg',
			'https://cdn.discordapp.com/attachments/670501947161444376/799529594997833786/QT-Netaji.png',
			'https://cdn.discordapp.com/attachments/670501947161444376/799529595430633482/netaji1.png'
		];

		const randomised_imgs = [Math.floor(Math.random() * images.length)];

		let boseEmbed = new Discord.MessageEmbed().setImage(
			String([images[randomised_imgs]])
		);

		message.channel.send(boseEmbed);
	}
};
