const { Client, RichPresence } = require("discord.js-selfbot-v13");
const { token, status} = require('./config');

const client = new Client()
client.login(token)

client.on('ready', () => {
    console.log(`${client.user.username} est connecté`)
    const rpc = new RichPresence(client)
        .setType(0)
        .setApplicationId('438122941302046720')
        .setName(status)
        .setStartTimestamp(new Date());
    client.user.setPresence({ activities: [rpc] });
})
