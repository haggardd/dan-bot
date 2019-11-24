const fortunes = require('./assets/fortunes.json');

exports.run = (client, message, arguments) => {
    message.reply(`your fortune says... '${fortunes.getRandom()}'`).catch(console.error);
}

exports.help = {
    name: "fortune",
    category: "Fun",
    description: "Replies to the user with a fortune.",
    usage: "fortune"
};
