import { Client, Message } from "discord.js"

// Queue DS
const musicQueue = require(".././musicQueue.js");
const servers = require("../app.js");

// ~Play Command
exports.run = (client: Client, message: Message, args: string[]) => {

    console.log(servers);

    if (!args[0]) {
        message.reply("Sorry, you have to tell me what you want to play!");
        return;
    }

    if (!message.guild.voiceConnection) {
        message.reply("You have to invite me into a voice channel first!"
            + " -- Use ~Join <channel>");
        return;
    }

    if (!servers[message.guild.id]) {
        let newQueue = new musicQueue();
        servers[message.guild.id] = newQueue;
    }
}

