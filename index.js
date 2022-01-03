const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = 'q!';
const TOKEN = process.env['TOKEN']
const config = require('./config.json')


client.once('ready', () => {
  console.log('Mrs. Wookiee is online!');
});


client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    message.channel.send('pong!');
  } else if (command == 'droid') {
    message.channel.send('Yes, C-3PO is one of my good old friends!');
  } else if (command == 'mandomad') {
    message.channel.send('He is just a kid. Leave him alone Gideon. I am gonna get you one day, and then i will scare the crap out of you! https://media.giphy.com/media/j6qnuNv4HoxrlUcjSR/giphy.gif')
  }
});

client.login(TOKEN)
