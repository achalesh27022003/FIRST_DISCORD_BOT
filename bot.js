require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ["MESSAGE"]
});
const BOT_PREFIX = "!"
const MOD_ME_COMMAND = "moderator"
client.on('ready', () => {
    console.log('Our bot is ready to go!!');
});

client.on("messageDelete", msg => {
    msg.channel.send("Stop Deleting Messages")
})

client.on('message', msg => {
    if(msg.content == 'I love MLH')
    {
        msg.react('❤️')
    }

    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
      modUser(msg.member)
    }
})
function modUser(member) {
    member.roles.add("825669446252101664")
}
  
client.login(process.env.BOT_TOKEN)