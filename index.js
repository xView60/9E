const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`Peci e prost`)
});
const config = require("./config.json");
client.on('message', message => {
   // This event will run on every single message received, from any channel or DM.

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if (message.author.bot) return;

  // Also good practice to ignore any message that does not start with our prefix,
  // which is set in the configuration file.
  if (message.content.indexOf(config.prefix) !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  // Let's go with a few common example commands! Feel free to delete or change those.
  if (command === "status")
  {
    if (message.author.id == config.god) {
      client.user.setActivity(message.content.slice(config.prefix.length).slice(command.length))
     message.channel.send("Activitatea bot-ului a fost modificata -> " + message.content.slice(config.prefix.length).slice(command.length))
    }
    else {
      message.channel.send("EROARE: Permisiuni insuficiente !")
    }
  }
  if (command === "avatar")
  {
    if (!message.mentions.users.first()) { message.channel.send('INFO: ' + config.prefix + 'avatar @persoana') }
    else {
    message.channel.send(message.mentions.users.first().displayAvatarURL())
    }
  }
 
});

client.login(config.token);