const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const colors = [
  0xff0000, 0x00ff00, 0x0000ff, 0x00ffff, 0xc72a0c, 0xd9daa5, 0x788770,
  0x5b7d6c, 0x6e9155, 0x191d1b, 0x6c8c61, 0xb7a589, 0xb0965b, 0x2b1412,
];

const randomColor = colors[Math.floor(Math.random() * colors.length)];

if (context.params.event.data.options[0].value === 'newsprizeride') {
  await lib.discord.interactions['@1.0.0'].responses.create({
    token: `${context.params.event.token}`,
    response_type: 'DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE',
  });

  await lib.discord.interactions['@1.0.0'].followups.create({
    token: `${context.params.event.token}`,
    channel_id: context.params.event.channel_id,
    content: '',
    tts: false,
    embeds: [
      {
        type: 'rich',
        title: `Weekly Update: Prize Ride | Ends in: <t:1654156800:R>`,
        description: '',
        color: randomColor,
        fields: [
          {
            name: ` Bravado Youga Classic`,
            value: `Ah, the late 60s, when utility was cool and this thing was affordable. You could never tell if the back contained a hemp-covered den of equality and recreational drug use or a mobile torture chamber for the village psycho. Or both. And that's a tradition we're proud to maintain.`,
          },
          {
            name: `Challenge:`,
            value: `Place top 5 in Car Meet Series races for 2 days in a row`,
          },
        ],
        image: {
          url: `https://cdn.discordapp.com/attachments/958874352680583221/979327195799506964/unknown.png`,
          height: 0,
          width: 0,
        },
      },
    ],
  });
}
