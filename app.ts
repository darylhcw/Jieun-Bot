
// Type Definitions
import { Message } from "discord.js";


//  Getting Discord and the Client
const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require("./settings.json");

client.on("ready", () => {
    console.log("I'm online :)");
})

client.on("message", (message: Message) => {
    if (message.author.bot) return;
    if (message.content.startsWith("ping")) {
        message.channel.send("pong");
    }
});

client.login(settings.token)



