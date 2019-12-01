const ProgressBar = require('./utilities/progress');

exports.run = async (client, message, arguments) => {
  let racers = [
    [],
    []
  ];

  const STEPS = 20;
  for (let i = 0; i < racers.length; i++) {
    racers[i].length = STEPS;
    for (let j = 0; j < STEPS; j++) {
      racers[i][j] = '-\u2003';
    }
  }

  const bot = new ProgressBar(':bar', {
    incomplete: '-\u2003',
    complete: '-\u2003',
    head: '🚘',
    total: 20
  });
  const racer = new ProgressBar(':bar', {
    incomplete: '-\u2003',
    complete: '-\u2003',
    head: '🚖',
    total: 20
  });

  let raceStatusMessage = await message.channel.send({
    embed: {
      color: client.colors.BLUE,
      title: 'Race',
      fields: [{
          name: client.user.tag,
          value: `:vertical_traffic_light: ${racers[0].join('')}:checkered_flag:`
        },
        {
          name: message.author.tag,
          value: `:vertical_traffic_light: ${racers[1].join('')}:checkered_flag:`
        }
      ]
    }
  });

  let timer = setInterval(() => {
    for (let i = 0; i < Number.random(1, 5); i++) {
      racer.tick();
    }
    for (let i = 0; i < Number.random(1, 5); i++) {
      bot.tick();
    }

    if (bot.lastDraw) {
      let result = 'Race ',
        progressBot = `:vertical_traffic_light: ${bot.lastDraw}:checkered_flag:`,
        progressRacer = `:vertical_traffic_light: ${racer.lastDraw}:checkered_flag:`;

      if (bot.complete && !racer.complete) {
        result += 'Ended';
        progressBot = `:vertical_traffic_light: ${bot.lastDraw}:checkered_flag: :trophy:`;
      } else if (!bot.complete && racer.complete) {
        result += 'Ended';
        progressRacer = `:vertical_traffic_light: ${racer.lastDraw}:checkered_flag: :trophy:`;
      } else if (bot.complete && racer.complete) {
        result += 'Ended - Draw';
      }

      raceStatusMessage.edit({
        embed: {
          color: client.colors.BLUE,
          title: result,
          fields: [{
              name: client.user.tag,
              value: progressBot
            },
            {
              name: message.author.tag,
              value: progressRacer
            }
          ]
        }
      }).catch(() => {});
    }
    if (bot.complete || racer.complete) {
      clearInterval(timer);
    }
  }, 1000);
}

exports.help = {
  name: "race",
  category: "Games",
  description: "Race the bot or someone else, either way you'll probably lose.",
  usage: "race | race [user]"
};