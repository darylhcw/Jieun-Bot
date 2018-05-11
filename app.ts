
// Required/imported stuff

const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require("./settings.json");

client.on("ready", () => {
    console.log("I'm online :)");
})

client.on("message", (message: Message) => {
    if (message.author === client.user) return;
    if (message.content.startsWith("ping")) {
        message.channel.send("pong");
    }
});

client.login(settings.token)



