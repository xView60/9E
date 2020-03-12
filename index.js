const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDY1OTMyMTk5NDc3Mzc5MDg0.Xmo9iw.jVVoTXzrAYaYcAqgSTAVJvz1zjo');