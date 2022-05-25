const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Xbox Solo Session Guide`,
      "description": `Everyone knows playing in public lobbies on GTA can be difficult. This will overview how to go about getting into your own, personal session for Xbox.`,
      "color": 0x00FFFF,
      "fields": [
        {
          "name": `Method One`,
          "value": "\u200B"
        },
        {
          "name": `Steps:`,
          "value": `1. Go to Settings then Account\n\n2. Go to Privacy & Safety then Xbox Privacy\n\n3. View Details  Customize > Communication & Multiplauer > You can joined multiplayer games. [You will Block this]`
        },
        {
          "name": `Method Two `,
          "value": "\u200B"
        },
        {
          "name": `Steps: `,
          "value": `1. Go to the Xbox Home Screen, disconnect from Ethernet connection, and enable wireless connection.\n\n2. Start up GTA and load into a public session via main loading screen or through Story Mode\n\n3. As soon as you load in, disconnect from wireless and reconnect to Ethernet, then move our character around. A lot of players should leave and you should be the only player left. If this doesn't work, you most likely waited too long. (Credits to u/maskup-aslo)`
        }
      ],
      "image": {
        "url": ``,
        "height": 0,
        "width": 0
      }
    }
  ]
});
