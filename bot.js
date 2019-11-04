const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    var msgContent = msg.content.toLowerCase();

    if (msgContent === 'hello') {
        msg.reply('hello there');
    }

    if (msgContent === 'avatar') {
        msg.reply(msg.author.avatarURL);
      }
});

client.login(process.env.BOT_TOKEN);