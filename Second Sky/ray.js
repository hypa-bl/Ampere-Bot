module.exports = {
	name: 'ray',
	aliases: ['leyet', 'cherry'],
	description: "Ilium's second upgrade package",
	execute(message, args) {
		const Discord = require('discord.js');
		const {
			accent,
			SSEmote,
			SSlogoImg,
			SSWatermark
		} = require('../panties.json');

		try {
			const CIray = new Discord.MessageEmbed()
				.setColor(accent)
				.setTitle('**Ray Leyet**')
				.setAuthor('Character Viewer | Project Second Sky')
				.setThumbnail('https://i.imgur.com/NN2XDxW.jpg')
				.addField(
					'○ General Info',
					'25F, 5’11” \nOutlaw / FNAL Cleanup Squad \nScience Side, Antagonist',
					true
				)
				.addField('○ Esper Status', 'Natural \nExtended Sight', true)
				.addField('○ Additional info', 'Introduced - Factory Arc')
				.setImage(SSWatermark);

			message.channel.send(CIray).then(sentMessage => {
				sentMessage.react(SSEmote);
			});
		} catch (error) {
			console.log(error);
		}
	}
};
