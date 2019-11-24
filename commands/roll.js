exports.run = (client, message, arguments) => {
    message.reply(`you rolled a ${Math.floor(Math.random() * 7)}!`).catch(console.error);
}

exports.help = {
    name: "roll",
    category: "Misc",
    description: "Rolls a 6 sided dice and replies with the number.",
    usage: "roll"
};

// TODO: implement custom dice rolls with given argument