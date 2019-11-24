exports.run = (client, message, arguments) => {
    if (arguments.length <= 1) {
        message.reply("you need to give me one or more choices to choose from! 👨‍⚖️").catch(console.error);
    } else {
        message.reply(`in my opinion... '${arguments[Math.floor(Math.random() * arguments.length)]}' is the best option. 👨‍⚖️`).catch(console.error);
    }   
}

exports.help = {
    name: "choose",
    category: "Misc",
    description: "Makes a choice from the given choices.",
    usage: "choose [choice1/choice2/choice3/...]"
};
