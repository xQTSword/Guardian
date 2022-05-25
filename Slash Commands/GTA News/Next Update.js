const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.data.options[0].value === 'nextnewsupdate') {
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
        title: `Next Weekly Update: <t:1653552000:R>`,
        description: '',
        color: 0x00ffff,
      },
    ],
  });
}
