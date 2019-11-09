const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();
const prefix = config.prefix;

client.on('warn', console.warn);
client.on('error', console.error);

client.on('ready', () => {
    console.log(`dan-bot logged in as ${client.user.tag}!`);

    client.user.setActivity('!help', { type: 'LISTENING' });
});

client.on('disconnect', () => {
    console.log('dan-bot disconnected!');
});

client.on('reconnecting', () => {
    console.log('dan-bot is reconnecting!');
});

client.on('message', message => {
    let sender = message.author;
    let command = message.content.toLowerCase().trim();
    let arguments = command.split(' ');

    if(sender.bot) return undefined;
    if(!command.startsWith(prefix)) return undefined;

    if(command.startsWith(prefix + 'help')) {
        message.reply('comming soon...');
    }

    if(command.startsWith(prefix + 'ping')) {
        message.reply('pong!');
    }

    if(command.startsWith(prefix + 'roll')) {
        message.reply('You rolled a ' + Math.floor(Math.random() * 7) + '!');
    }
});

client.login(process.env.BOT_TOKEN);