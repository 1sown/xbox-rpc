const { Client, SpotifyRPC, CustomStatus, RichPresence } = require("discord.js-selfbot-v13");
const config = require('./config')        

const client = new Client({})
client.login(config.token)

client.on('ready', () => {
    console.log(client.user.username)
    const rpc = new RichPresence(client)
        .setType('PLAYING')
        .setApplicationId('438122941302046720')
        .setName(config.status)
        .setStartTimestamp(new Date());
      client.user?.setPresence({ activities: [rpc] });
})
