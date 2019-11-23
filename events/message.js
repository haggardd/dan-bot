module.exports = (client, message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(client.config.prefix) !== 0) return;

    const sender = message.author;
    const arguments = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = arguments.shift().toLowerCase();

    if (!command) return;

    command.run(client, message, arguments);
}