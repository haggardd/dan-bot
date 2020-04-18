module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(client.config.prefix) !== 0) return;

    const args = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    const executedCommand = client.commands.get(command);

    if (!executedCommand) return;

    await executedCommand.run(client, message, args);
};

// TODO: make all commands asynchronous
