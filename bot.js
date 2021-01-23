require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"]
});

const BOT_PREFIX = '!';
const FRIEND_ME_COMMAND = 'friend-me'; 

client.on("ready", () => {
  console.log("Bot ready");
});


client.on("message", (msg) => {
  if (msg.content === "!ping") {
    msg.channel.send("pong");
  }
});

client.on("messageDelete", msg => {
  msg.channel.send("Message deleted");
})

client.on("message", (msg) => {
  if (msg.content === BOT_PREFIX + FRIEND_ME_COMMAND) {
    msg.member.roles.add("801484056813895700");
  }
});

client.login(process.env.BOT_TOKEN);
