const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const colors = [
  0xff0000, 0x00ff00, 0x0000ff, 0x00ffff, 0xc72a0c, 0xd9daa5, 0x788770,
  0x5b7d6c, 0x6e9155, 0x191d1b, 0x6c8c61, 0xb7a589, 0xb0965b, 0x2b1412,
];

const randomColor = colors[Math.floor(Math.random() * colors.length)];

if (context.params.event.data.options[0].value === 'newstime') {
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
        title: `Weekly Update: Time Trials | Ends in: <t:1654156800:R>`,
        description: '',
        color: randomColor,
        fields: [
          {
            name: `This week's Time Trials:`,
            value: `**• [Premium Race: Cutting Coroners](https://www.youtube.com/watch?v=XYfKWQ0_qmI)\n• [HSW Time Trial: Sandy Shores](https://www.youtube.com/watch?v=AZM-5L6AM3o)\n• [Time Trial: Calafia Way](https://www.youtube.com/watch?v=OPcZWynkaYU)\n• [RC Time Trial: Davis Quartz](https://www.youtube.com/watch?v=_Kn9Pgoqe60)\n\n[Complete GTA Wiki on Time Trials](https://gta.fandom.com/wiki/Time_Trials)**`,
          },
        ],
        image: {
          url: `https://cdn.discordapp.com/attachments/958874352680583221/979327928263409664/NewsTrials.gif`,
          height: 0,
          width: 0,
        },
      },
    ],
  });
}
