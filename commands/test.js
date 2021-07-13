module.exports = {
	name: 'test',
	description: 'tset',
	execute(message, args) {
		const Discord = require('discord.js');
		const ampere = new Discord.Client();

		const webhooks = message.channel.fetchWebhooks();

		try {
			message.channel.fetchWebhooks().then(webhooks => {
				webhooks.forEach(wh => wh.delete());
			});
			
       message.channel
					.createWebhook(message.author.username, {
						avatar: message.author.avatarURL()
					})
					.then(webhook => {
						webhook.send("we do a little testing");
					});
					
		} catch (error) {
			console.log(error);
			message.channel.send('hmmmmm').then(sentMessage => {
				sentMessage.react('🗿');
			});
		}
	}
};
