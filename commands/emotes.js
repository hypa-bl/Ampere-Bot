module.exports = {
	name: 'emotes',
	description: 'see whatcha got here',
	aliases: ['emoji', 'emote'],

	execute(message, args) {
		let list = require('../poor mans nitro/ListOfAllEmotes.json');

		var listElement = [];

		for (i = 0; i < list.emotes.length; i++) {
			let emoteName = list.emotes[i].name;
			let emoteID = list.emotes[i].ID;
			let animOrNot = list.emotes[i].animated;

			let emoteInQuestion =
				animOrNot == 'true'
					? `<a:${emoteName}:${emoteID}>`
					: `<:${emoteName}:${emoteID}>`;
			let nicelyFormattedEmotes = emoteInQuestion + ' ' + emoteName;
			listElement.push(nicelyFormattedEmotes);
		}
		let theListToEndAllLists = listElement.join('\n');

		const { MessageEmbed } = require('discord.js');
		const beautifulEmbed = new MessageEmbed()
			.setTitle("poor man's nitro")
			.setDescription("these will auto-trigger when their names are spoken")
			.addField("Available emotes", theListToEndAllLists, true);

		message.channel.send(beautifulEmbed);
	}
};
