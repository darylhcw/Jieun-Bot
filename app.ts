
// Type Definitions
import { Message, Client } from "discord.js";

// Required modules + Json
const DISCORD = require("discord.js");
const FILESYS = require("fs");

const PRIVATECONFIG = require("./privateConfig.json");
const CLIENT: Client = new DISCORD.Client();

// This is meant to hold a bunch of Server objects (see Server.js/ts)
const SERVERS = {};


/*
 * Loop through /events/ folder and attaches each event file to the appropriate event
 */
FILESYS.readdir("./events/", (err: Error, files: string[]) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (file.endsWith("js")) {
            let eventFunction = require(`./events/${file}`);
            let eventName = file.split(".")[0];
            CLIENT.on(eventName, (...args: string[]) => eventFunction.run(CLIENT, ...args));
        }
    });
});


/*
 * Simple Message Handler
 */
CLIENT.on("message", (message: Message) => {
    if (message.author.bot) return;
    if (message.content[0] != PRIVATECONFIG.prefix) return;

    // Getting args for the command
    const args: any[] = message.content.slice(PRIVATECONFIG.prefix.length).trim().split(/ +/g);
    const command: string = args.shift().toLowerCase();

    // Depending on the command, run the matching command file with args
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(CLIENT, message, args);
    } catch (err) {
        console.error(err);
    }
});


// Login to Discord using the bot's token
CLIENT.login(PRIVATECONFIG.token)


// Export servers list
exports = SERVERS;

