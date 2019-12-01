exports.run = async (client, message, arguments) => {
  return await message.reply(message.author.avatarURL).catch(console.error);
}

exports.help = {
  name: "avatar",
  category: "Misc",
  description: "Replies with the user's avatar.",
  usage: "avatar"
};