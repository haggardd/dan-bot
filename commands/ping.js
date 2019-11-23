exports.run = (client, message, arguments) => {
    message.channel.send('pong!').catch(console.error);
}