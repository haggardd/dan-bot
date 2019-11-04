const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const PORT = process.env.PORT || 3000;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'hello dan') {
        msg.reply('hello there');
    }
});

client.login(auth.token);

client.addListener(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});