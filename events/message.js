module.exports = async (client, message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  const arguments = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = arguments.shift().toLowerCase();

  const executedCommand = client.commands.get(command);

  if (!executedCommand) return;

  await executedCommand.run(client, message, arguments);
}

// TODO: make all commands asynchronous