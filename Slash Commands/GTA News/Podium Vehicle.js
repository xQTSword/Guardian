const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const colors = [
  0xff0000, 0x00ff00, 0x0000ff, 0x00ffff, 0xc72a0c, 0xd9daa5, 0x788770,
  0x5b7d6c, 0x6e9155, 0x191d1b, 0x6c8c61, 0xb7a589, 0xb0965b, 0x2b1412,
];

const randomColor = colors[Math.floor(Math.random() * colors.length)];

if (context.params.event.data.options[0].value === 'newspodium') {
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
        title: `Weekly Update: Podium Vehicle | Ends in: <t:1654156800:R>`,
        description: '',
        color: randomColor,
        fields: [
          {
            name: `Übermacht Revolter`,
            value: `In your line of work, you demand flexibility. You need a car that can blend seamlessly into a line of executive saloons, but not look amiss when it arrives on the red carpet. It needs to look respectable dropping you off at court, threatening picking you up from Bolingbroke, and when the deal goes south, it needs room for a driver-operated machine gun upgrade. The Revolter can do all that in first gear - just wait till you see fifth.\n\nPlease note: Weapon modifications can only be applied at a Vehicle Workshop inside an Avenger or Mobile Operations Center.\n`,
          },
        ],
        image: {
          url: `https://cdn.discordapp.com/attachments/958874352680583221/979326759294103592/unknown.png`,
          height: 0,
          width: 0,
        },
      },
    ],
  });
}
