const Discord = require('discord.js');
const PREFIX = require('./config');

const client = new Discord.Client();

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

client.on('message', msg => {
    if(msg.author.bot) return undefined;
    if(!msg.content.startsWith(PREFIX)) return undefined;

    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');

    let command = msg.content.toLowerCase().split(' ')[0];
    command = command.slice(PREFIX.length);

    if(command === 'play') {
        message.reply('testing');
    }
});

client.login(process.env.BOT_TOKEN);