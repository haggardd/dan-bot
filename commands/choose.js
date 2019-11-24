exports.run = async (client, message, arguments) => {
    if (arguments.length <= 1) {
        await message.reply("you need to give me one or more options to choose from! 👨‍⚖️").catch(console.error);
    } else {
        await message.reply(`in my opinion... '${arguments[Math.floor(Math.random() * arguments.length)]}' is the best option. 👨‍⚖️`).catch(console.error);
    }   
}

exports.help = {
    name: "choose",
    category: "Misc",
    description: "Makes a choice from the given options.",
    usage: "choose [choice1/choice2/choice3/...]"
};

// TODO: allow this to take multi-word options (you could seperate options with a specific character)