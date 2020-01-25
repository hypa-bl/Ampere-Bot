var DiscordIO = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
console.log('refreshed client ready');
});

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

//Initialize Discord Bot + token check
var bot = new DiscordIO.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('old client ready?');
    logger.info('logged in as Ampere');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

const InfoEmbed = new Discord.RichEmbed()
	.setColor('#f58164')
	.setTitle('Ampere Bot by hypa.')
	.setDescription('early test version of a discord bot I made for fun.')
	.setFooter('enjoy.');

client.on('message', message => {
	console.log(message.content);
});

    // bot needs to know if it will execute a command
    // it will listen for messages that will start with `!`
    // editing substring to ~
    if (message.substring(0, 1) == '~') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'what’s popping?'
                });
            break;

            // Just add any case commands if you want to.

            case 'ayy':
                bot.sendMessage({
                    to: channelID,
                    message: 'lmao'
                });
            break; 

	//fancy embed on command
		case 'info':		
	channel.send(InfoEmbed);
		break;
         }
     }


//lousy code that replies to kil with no

bot.on('message', function (user, userid, channelID, message, evt) {
      if (message.substring(0, 1) == 'k') {
		  var args = message.substring(1).split(' ');
         	  var cmd = args[0];
		  args = args.splice(1);
		
		  switch(cmd) {
								
    	case 'il':
	bot.sendMessage ({
	to: channelID,
	message: 'no'
	});
	break;	
  	}
    } 
});

//most lousy code that replies to ayy 

bot.on('message', function (user, userid, channelID, message, evt) {
      if (message.substring(0, 1) == 'a') {
		  var args = message.substring(1).split(' ');
         	  var cmd = args[0];
		  args = args.splice(1);
		
		  switch(cmd) {
								
    	case 'yy':
	bot.sendMessage ({
	to: channelID,
	message: 'lmao'
	});
	break;	
  	

	case 'pyr':
	bot.sendMessage ({
	to: channelID,
	message: 'Дpyг'
	});
	break;
	}
    } 
});
