const request = require('request-promise-native');
let activeChannels = [];

exports.run = async (client, message, arguments) => {
  // TODO: finish implementing trivia game
}

exports.help = {
  name: "trivia",
  category: "Games",
  description: "Asks the user a trivia question and waits for an answer.",
  usage: "trivia [difficulty (easy/medium/hard)]"
};