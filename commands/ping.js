exports.run = (client, message, arguments) => {
    message.reply('pong!').catch(console.error);
}