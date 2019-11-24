exports.run = (client, message, arguments) => {
    message.reply(`you rolled a ${Math.floor(Math.random() * 7)}!`).catch(console.error);
}