"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
// ~Join Command
exports.run = (client, message, args) => {
    if (args.length > 1) {
        message.reply("Please only enter one voice channel. It shouldn't have spaces!.");
        return;
    }
    let channelName = args[0];
    for (var ch of message.guild.channels.array()) {
        if (ch.name == channelName && ch instanceof discord_js_1.VoiceChannel) {
            if (ch.type == "voice") {
                if (ch.joinable) {
                    ch.join();
                    message.reply(`Okay, I joined \"${channelName}\".`);
                    return;
                }
            }
        }
    }
    message.reply(`Hey, I couldn't find the channel called \"${channelName}\".`);
};
