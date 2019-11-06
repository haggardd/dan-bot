const Discord = require('discord.js');
const client = new Discord.Client();

const commmandPrefix = '-dan';

client.on('warn', console.warn);
client.on('error', console.error);

client.on('ready', () => {
    console.log(`dan-bot logged in as ${client.user.tag}!`);
});

client.on('disconnect', () => {
    console.log('dan-bot disconnected!');
});

client.on('reconnecting', () => {
    console.log('dan-bot is reconnecting!');
});

client.on('message', message => {
    var messageContent = message.content.toLowerCase().trim();

    if(messageContent.startsWith(commmandPrefix))
    {
        if (messageContent === commmandPrefix + 'hello') {
            message.reply('hello there');
        }
    
        if (messageContent === commmandPrefix + 'avatar') {
            message.reply(message.author.avatarURL);
        }
    }
});

client.login(process.env.BOT_TOKEN);