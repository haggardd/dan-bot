const discord = require('discord.js');
const config = require('./config.json');

const client = new discord.Client();
const prefix = config.prefix;

client.on('warn', console.warn);
client.on('error', console.error);

client.on('ready', () => {
    console.log(`nad-bot logged in as ${client.user.tag}!`);
    client.user.setActivity('!help', { type: 'LISTENING' });
});

client.on('disconnect', () => {
    console.log('nad-bot disconnected!');
});

client.on('reconnecting', () => {
    console.log('nad-bot is reconnecting!');
});

client.on('message', message => {
    if (message.author.bot) return undefined;
    if (message.content.indexOf(config.prefix) !== 0) return;

    const sender = message.author;
    const arguments = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = arguments.shift().toLowerCase();

    if (command.startsWith(prefix + 'help')) {
        message.reply('coming soon...');
    }

    if (command === 'git') {
        message.reply('https://github.com/haggardd/nad-bot take a look!');
    }

    if (command === 'ping') {
        message.reply('pong!');
    }

    if (command === 'roll') {
        message.reply('you rolled a ' + Math.floor(Math.random() * 7) + '!');
    }

    if (command === 'avatar') {
        message.reply(sender.avatarURL);
    }
});

client.login(process.env.BOT_TOKEN);