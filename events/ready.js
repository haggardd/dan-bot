module.exports = async (client) => {
    console.log(`nad-bot logged in as ${client.user.tag}!`);
    client.user.setActivity('!help', { type: 'LISTENING' });
}