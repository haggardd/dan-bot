exports.run = async (client, message) => {
    return await message
        .reply(message.author.displayAvatarURL())
        .catch(console.error);
};

exports.help = {
    name: "avatar",
    category: "Misc",
    description: "Replies with the user's avatar.",
    usage: "avatar",
};
