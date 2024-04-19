const { Client, SpotifyRPC, CustomStatus, RichPresence } = require("discord.js-selfbot-v13");
         
const rpc = new RichPresence(client)
        .setType('PLAYING')
        .setApplicationId('438122941302046720')
        .setName("Grand Theft Auto VI")
        .setStartTimestamp(new Date());
      client.user?.setPresence({ activities: [rpc] });
