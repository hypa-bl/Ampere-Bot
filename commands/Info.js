module.exports = {
	name: 'info',
	aliases: ['help', 'ampere'],
	description: 'includes information about bot',
	execute(message, args) {
		const Discord = require('discord.js');
		const config = require('../panties.json');
		const moment = require('moment-timezone');
		const pfp = config.pfp;
		const accent = config.accent;
		const version = config.version;
		const LogoEmote = config.SSEmote;
		const ampere = new Discord.Client();
		const date =
			moment()
				.tz('Asia/Kolkata')
				.format('MMM Do, h:mm:ss a') + ' IST';

		try {
			const infoEmbed = new Discord.MessageEmbed()
				.setColor(accent)
				.setTitle(`Ampere bot | by hypa <a:goos:774020452959911956>`)
				.setAuthor('Info')
				.setThumbnail('https://i.imgur.com/qzypF5j.png')
				.setDescription(
					"Will do a thing or two or maybe none depending on how much code the dev breaks every update.\n\nA handful of fun commands to play around with, most of which don't come with a warning"
				)
				.addFields(
					{
						name: '○ Prefix commands [~] | text and images',
						value: 'info (or help), date, roll, bose, hug, clearchat (admin-only)'
					},
					{
						name: '○ Non-prefix commands',
						value:
							'ayy, kil, yuh, gg, understandable, uh oh, amen, hi (10s cooldown), nom, poggers',
						inline: false
					},
					{
						name: '○ Charinfo commands (Second Sky only)',
						value:
							'Use the `~charinfo` prefix followed by `character name` to get information on the character. Use `~charinfo overview` to view available characters.',
						inline: false
					}
				)
				.setFooter(version + ' Last boot : ' + date, pfp);

			if (message.channel.type == 'dm') {
				const dmInfoEmbed = infoEmbed.addField(
					'○ dm info',
					`You are - **${
						message.author.tag
					}**\nConvo Detected as dm. Admin tools like clearchat will be disabled.`,
					false
				);

				message.channel.send(dmInfoEmbed);
			} else {
				const servInfoEmbed = infoEmbed.addField(
					'○ Server info',
					`Name - **${message.guild.name}**\nTotal members: **${
						message.guild.memberCount
					}**`,
					false
				);

				message.channel.send(servInfoEmbed);
			}

			/*
			const infoEmbed = {
				color: accent,
				title: 'Ampere bot | by hypa.',
				author: {
					name: 'Info'
				},
				description: 'wacky ass bot with two and a half brain cells',
				thumbnail: pfp,
				fields: [
					{
						name: '○ Prefix commands [~] | text and images',
						value: 'info, beep, date, roll'
					},
					{
						name: '○ Non-prefix commands',
						value: 'ayy, kil, yuh, gg, understandable, uh oh, amen',
						inline: false
					},
					{
						name: '○ Charinfo commands (Second Sky only)',
						value: 'Use the `~charinfo` prefix followed by `character name` to get information on the character. Use `~charinfo overview` to view available characters.',
						inline: false
					},
          {
            name: '○ Server info',
            value: `Name - **${message.guild.name}**\nTotal members: **${message.guild.memberCount}**`,
            inline: false 
          }
				],
				footer: {
					text: version + ' Last boot : ' + date,
					icon_url: pfp
				}
			};
			message.channel.send({ embed: infoEmbed });
      */
		} catch (error) {
			console.log('your infoembed just shat its pants ' + error);
		}
	}
};
