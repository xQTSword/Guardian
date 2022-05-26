const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const colors = [
  0xff0000, 0x00ff00, 0x0000ff, 0x00ffff, 0xc72a0c, 0xd9daa5, 0x788770,
  0x5b7d6c, 0x6e9155, 0x191d1b, 0x6c8c61, 0xb7a589, 0xb0965b, 0x2b1412,
];

const randomColor = colors[Math.floor(Math.random() * colors.length)];

if (context.params.event.data.options[0].value === 'newsupdate') {
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
        title: `Weekly Update: Complete Update | Ends in: <t:1654156800:R>`,
        description: '',
        color: randomColor,
        fields: [
          {
            name: `Vehicles:`,
            value: `**__Podium Vehicle__**\n• Übermacht Revolter\n\n**__Prize Ride__**\n• Bravado Youga Classic (Challenge: Place top 5 in Car Meet Series races for 2 days in a row)\n\n\n**__Test Vehicles__**\n• Dinka Jester RR\n• Declasse Vamos\n• Vulcar Fagaloa\n\n**__Time Trials__**\n• [Premium Race: Cutting Coroners](https://www.youtube.com/watch?v=XYfKWQ0_qmI)\n• [HSW Time Trial: Sandy Shores](https://www.youtube.com/watch?v=AZM-5L6AM3o)\n• [Time Trial: Calafia Way](https://www.youtube.com/watch?v=OPcZWynkaYU)\n• [RC Time Trial: Davis Quartz](https://www.youtube.com/watch?v=_Kn9Pgoqe60)\n\n[Complete GTA Wiki on Time Trials](https://gta.fandom.com/wiki/Time_Trials)`,
          },
          {
            name: `Bonuses:`,
            value: `**2x $GTA & RP**\n• The Vespucci Job (Remix) * [NEW]\n- Truck Off\n- Missile Base/Diamond/Bunker Adv Modes\n- Mobile Operations\n- VIP Work\n- MC Work & Contracts\n- Bodyguard/Associate Salary\n\n**Twitch Prime**\n• $100,000\n\n**GTA+ Only**\n• TBD`,
            inline: true,
          },
          {
            name: `Discounts: `,
            value: `  **75%**\n• Imani Phone Services\n\n  **50%**\n• Biker Supplies\n\n  **40%**\n• Vagaloa Fagaloa ($201,000)\n\n  **30%**\n• MC Businesses\n• Vehicle Warehouses\n• Special Cargo Warehouses\n• Vapid Caracara ($1,242,500)\n• Declasse Granger 3600LX ($966,000 - $724,500)\n• Benefactor Turreted Limo ($1,155,000)\n• Declasse Vamos ($417,200)\n\nTwitch Prime\n• N/A`,
            inline: true,
          },
        ],
        image: {
          url: `https://cdn.discordapp.com/attachments/958874352680583221/979327927743311902/NewsWeeklyUpdate.gif`,
          height: 0,
          width: 0,
        },
      },
    ],
  });
}
