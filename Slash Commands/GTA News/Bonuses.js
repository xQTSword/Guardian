const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const colors = [
  0xff0000, 0x00ff00, 0x0000ff, 0x00ffff, 0xc72a0c, 0xd9daa5, 0x788770,
  0x5b7d6c, 0x6e9155, 0x191d1b, 0x6c8c61, 0xb7a589, 0xb0965b, 0x2b1412,
];

const randomColor = colors[Math.floor(Math.random() * colors.length)];

if (context.params.event.data.options[0].value === 'newsbonuses') {
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
        title: `Weekly Update: Bonuses | Ends in: <t:1654156800:R>`,
        description: '',
        color: randomColor,
        fields: [
          {
            name: '\u200B',
            value: `**2x $GTA & RP**\n• The Vespucci Job (Remix) * [NEW]\n- Truck Off\n- Missile Base/Diamond/Bunker Adv Modes\n- Mobile Operations\n- VIP Work\n- MC Work & Contracts\n- Bodyguard/Associate Salary\n\n**Twitch Prime**\n• $100,000\n\n**GTA+ Only**\n• TBD`,
          },
        ],
        image: {
          url: `https://cdn.discordapp.com/attachments/959199276553093160/979189363084763136/NewsBonuses.gif`,
          height: 0,
          width: 0,
        },
      },
    ],
  });
}
