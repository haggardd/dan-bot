exports.run = (client, message, arguments) => {
    message.reply(message.author.avatarURL).catch(console.error);
}

exports.help = {
    name: "avatar",
    category: "Misc",
    description: "Replies with the user's avatar.",
    usage: "avatar"
};