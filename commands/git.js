exports.run = (client, message, arguments) => {
    message.reply('check out my repo -> https://github.com/haggardd/nad-bot').catch(console.error);
}

exports.help = {
    name: "git",
    category: "System",
    description: "Replies with the bot's github repo.",
    usage: "git"
};