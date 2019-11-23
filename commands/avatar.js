exports.run = (client, message, arguments) => {
    message.reply(message.author.avatarURL).catch(console.error);
}