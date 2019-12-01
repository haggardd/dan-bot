const outcomes = require('../assets/8ballOutcomes.json');

exports.run = async (client, message, arguments) => {
  if (!arguments[0]) {
    return await message.reply("you need to ask me a question!").catch(console.error);
  } else {
    return await message.reply(`Magic 8-Ball says... '${outcomes[Math.floor(Math.random() * outcomes.length)]}' 🎱`).catch(console.error);
  }
}

exports.help = {
  name: "8ball",
  category: "Fun",
  description: "Gives the user an answer to their burning questions.",
  usage: "8ball [question]"
};