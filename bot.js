const discord = require('discord.js');
const Enmap = require("enmap")
const fs = require("fs")

const config = require('./config.json');
const client = new discord.Client();

client.config = config;

client.user.setActivity('!help', { type: 'LISTENING' });

fs.readdir("./events", (error, files) => {
    if (error) return console.error(error);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Enmap();

fs.readdir("./commands/", (error, files) => {
    if (error) return console.error(error);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Attempting to load command ${commandName}`);
        client.commands.set(commandName, props);
        console.log(`Command loaded`);
    })
})

client.login(process.env.BOT_TOKEN);