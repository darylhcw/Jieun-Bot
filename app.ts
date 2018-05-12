
// Type Definitions
import { Message } from "discord.js";
import { Client } from "discord.js";


// Required modules + Json
const Discord = require("discord.js");
const fileSystem = require("fs");

const privateConfig = require("./privateConfig.json");
const client: Client = new Discord.Client();

// Server Object for Player
const servers = {};

// Loop through /events/ folder and attaches each event file to the appropriate event
fileSystem.readdir("./events/", (err: Error, files: string[]) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (file.endsWith("js")) {
            let eventFunction = require(`./events/${file}`);
            let eventName = file.split(".")[0];
            client.on(eventName, (...args) => eventFunction.run(client, ...args));
        }
    });
});


// Simple Message Handler
client.on("message", (message: Message) => {
    if (message.author.bot) return;
    if (message.content[0] != privateConfig.prefix) return;

    // Getting args for the command
    const args: any[] = message.content.slice(privateConfig.prefix.length).trim().split(/ +/g);
    const command: string = args.shift().toLowerCase();

    // Depending on the command, run the matching command file with args
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
});


// Login to Discord using the bot's token
client.login(privateConfig.token)


// Export server
exports = servers;
