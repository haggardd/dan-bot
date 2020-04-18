exports.run = async (client, message) => {
    return await message.reply("pong! 🏓").catch(console.error);
};

exports.help = {
    name: "ping",
    category: "Misc",
    description: "Replies to the user with 'pong!'... thats it.",
    usage: "ping",
};
