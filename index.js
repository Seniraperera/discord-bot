const { Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, // Required to interact with guilds
        GatewayIntentBits.GuildMembers, // Required to receive guild member events
        GatewayIntentBits.GuildMessages, // Required to send messages
        GatewayIntentBits.MessageContent // Required to read message content
    ]
});

// Event listener for when the bot is ready
client.once('ready', () => {
    console.log('Welcome bot is online!');
});

// Event listener for when a new member joins a guild
client.on('guildMemberAdd', member => {
    // Find the welcome channel
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome');

    // Send a welcome message if the channel exists
    if (welcomeChannel) {
        welcomeChannel.send(`Welcome to the server, ${member}! 🎉 We're glad to have you here!`);
        member.send(`Welcome to the server, ${member}! 🎉 We're glad to have you here!`);

    }
});


client.on('messageCreate', message => {
    if (message.content === 'binaaa') {
        message.channel.send('Yess bbyyy');
    }else if (message.content === 'bino') {
        message.channel.send('Yess');
    }else if (message.content === 'seniya') {
        message.channel.send('He is too busy at this time');
    }

});


client.login('');
