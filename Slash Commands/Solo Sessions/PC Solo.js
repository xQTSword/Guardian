const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `PC Solo Session Guide`,
      "description": `Everyone knows playing in public lobbies on GTA can be difficult. This will overview how to go about getting into your own, personal session for PC.`,
      "color": 0x00FFFF,
      "fields": [
        {
          "name": `Method One`,
          "value": "\u200B"
        },
        {
          "name": `Steps:`,
          "value": `1. Open Resource Monitor, suspend GTA V, wait about 10-15 seconds, and then resume process`
        },
        {
          "name": `Method Two `,
          "value": "\u200B"
        },
        {
          "name": `Steps: `,
          "value": `1. There is another, more secure way for PC: TIP: If you are on PC block these ports using your firewall to be in a public session by yourself. The Task Manager method is good to use if you get stuck in the clouds or in a loading screen. Credits to u/bob_the_impala.`
        },
        {
          "name": `Firewall Rule`,
          "value": "\u200B"
        },
        {
          "name": `Steps: `,
          "value": `1. Open Windows Defender Firewall with Advanced Security. You may find it by searching “firewall”.\n\n2. Select “Outbound Rules” in the leftmost view, and click on “New Rule” in the rightmost view.\n\n3. For the rule type, choose “Custom”.\n\n4. For programs, choose “All programs”.\n\n5. For protocol and ports, configure as the following:\nProtocol type: UDP\nLocal port: Specific Ports, 6672\nRemote port: All Ports\nChoose protocol and ports\n\n6. For the scope, make sure “Any IP address” is selected for both options.\n\n7. For the action, choose “Block the connection”.\n\n8. For the profile, make sure every checkbox is selected.\n\n9. Give any name and description you like for the firewall rule.\n\n10. The rule should be added and enabled.`
        },
        {
          "name": `Making Session - Firewall`,
          "value": `- Make a Solo Public Session.\n\n- Make sure the firewall rule is disabled, and invite anyone you want to play with to the session.\n\n- After everyone is in, enable the firewall rule immediately to lock the session.\n\n- If anyone in your session leaves and wants to come back, you need to disable the firewall rule to let them rejoin, and enable it again after they have spawned.\n\n- If some other friend wants to join your session when it is locked in this way, you need to disable the rule to let them join as well, and re-enable it afterwards.\n\n- If and only if you are the only one who has the firewall rule enabled, other people will be able to join the session once you leave. Players who are still in the session after you left should be aware of this.`
        }
      ]
    }
  ]
});
