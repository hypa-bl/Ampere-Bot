module.exports = {
	name: 'comic',
	aliases: ['webcomic', 'webtoon', 'meat'],
	execute(message, args) {
		const Discord = require('discord.js');
		const { accent, SSEmote } = require('../panties.json');

		try {
			const comicEmbed = new Discord.MessageEmbed()
				.setColor(accent)
				.setTitle('Comic | Project Second Sky')
				.setURL(
					'https://www.webtoons.com/en/challenge/project-second-sky/list?title_no=410260'
				)
				.setAuthor('Line Webtoon')
				.setDescription('Read the comic on Webtoon Canvas!')
				.setThumbnail('https://i.imgur.com/fHELRy7.png')
				.setFooter('Click or tap on this embed to view.');

			message.channel.send(comicEmbed);
		} catch (error) {
			console.log('your comicembed just shat its pants -->' + error);
		}
	}
};
