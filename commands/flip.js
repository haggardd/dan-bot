exports.run = (client, message, arguments) => {
  let outcomes = ['Heads', 'Tails'];
  let outcome = outcomes[Math.floor(Math.random() * outcomes.length)];

  message.reply(`its ${outcome}!`).catch(console.error);
}

exports.help = {
  name: "flip",
  category: "Misc",
  description: "Replies with a coin flip result. Heads or tails!?",
  usage: "flip"
};