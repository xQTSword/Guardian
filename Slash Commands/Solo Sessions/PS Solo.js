const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Playstation Solo Session Guide`,
      "description": `Everyone knows playing in public lobbies on GTA can be difficult. This will overview how to go about getting into your own, personal session for Playstation.`,
      "color": 0x00FFFF,
      "fields": [
        {
          "name": `- MTU Method -`,
          "value": `One of the most popular methods for getting into a solo session. This method is by far one of the easiest as it requires little to no work and can be done from your playstation. \n\n**Steps**: \n\n1. From your Playstation, go to Settings > Network > Set Up Internet Connection\n2. Select Wi-Fi, or LAN Cable > Custom > then select your network.\n3. Leave all other settings as normal except MTU. Change MTU to around 800-850. The default MTU setting is 1500.\n4. Finish setting up and load into a online session from story mode.\n`
        },
        {
          "name": `Info & Downsides: `,
          "value": `- The lower your MTU is, the harder it is for players to join. Too low of a MTU can prevents anyone, including your friends, from being able to stay in your session.\n- If players do manage to stay in your session, MTU grants the chance that they will lag out of the session when near you. \n- Remember to change your MTU back to normal when you are finished playing in the solo session. If you don't, you will be unable to load into a public lobby.`
        },
        {
          "name": `- Firewall Method -`,
          "value": `This method is slightly more obscure for playstation users as it requires access to your router and a bit of knowledge of where to go. You should check out a guide on your router to fully understand it.`
        },
        {
          "name": `Steps:`,
          "value": `1. Have GTA closed and access your router. \n\n2. Go to your firewall settings and set it to its highest setting [High Security, Max Security, etc.]\n\n3. Start GTA and try loading into a session. You should automatically enter your own session.\n\n4. Sart a timer for 15 minutes from when you first load into the session. This will ensure the session holds up.\n\n5. Once the 15 minutes is over, switch your firewall setting back to normal. Your friends should now be able to join your session.\n\n`
        },
        {
          "name": `Info & Downsides`,
          "value": `- This method requires access to your router and a bit of knowledge of how to navigate it.\n- More secure than the MTU method and dosen't present any of its downsides.\n- Can jump right back into playing after finished with it.`
        },
        {
          "name": `Port Blocking Method`,
          "value": `This method also requires access to your  router simialry to the firewall method. You should have a bit of knowledge on how to access your router and how to navigate it as well.`
        },
        {
          "name": `Steps`,
          "value": `1.Have GTA closed and access your router.\n\n2. Go to your parental control setting or something similar [Look at your router guide].\n\n3. Create a new rule:\n- Source IP: Your PS4/PS5 IP address\n- Port Range: 6672:65535\n- Protocol: UDP \n\n4. Save all settings and enable the rule. \n\n5. Load into a GTA session with the rule enabled and set a timer for 15-20 minutes. \n\n6. After the time is up, deactivate the rule. Players can now join your session.\n\n`
        },
        {
          "name": `Info & Downsides`,
          "value": `- This method requires access to your router and a bit of knowledge of how to navigate it.\n- More secure than the MTU method and dosen't present any of its downsides.\n- Can jump right back into playing after finished with it.`
        }
      ]
    }
  ]
});
