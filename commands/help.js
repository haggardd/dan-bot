exports.run = async (client, message, arguments) => {
  if (!arguments[0]) {
    const commands = client.commands;
    const commandNames = commands.keyArray();
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

    let currentCategory = "";
    let output = `= Command List =\n\n[Use ${client.config.prefix}help [command] for specific command details]\n`;
    const sorted = commands.array().sort((p, c) => p.help.category > c.help.category ? 1 : p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1);
    sorted.forEach(c => {
      const category = c.help.category;
      if (currentCategory !== category) {
        output += `\u200b\n== ${category} ==\n`;
        currentCategory = category;
      }
      output += `${client.config.prefix}${c.help.name}${" ".repeat(longest - c.help.name.length)} :: ${c.help.description}\n`;
    });
    return await message.channel.send(output, {
      code: "asciidoc",
      split: {
        char: "\u200b"
      }
    });
  } else {
    let command = arguments[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      return await message.channel.send(`= ${command.help.name} = \n${command.help.description}\nusage:: ${command.help.usage}\n= ${command.help.name} =`, {
        code: "asciidoc"
      });
    }
  }
};

exports.help = {
  name: "help",
  category: "System",
  description: "Displays all possible commands.",
  usage: "help | help [command]"
};