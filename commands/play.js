"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Queue DS
var musicQueue = require(".././musicQueue.js");
var servers = require("../app.js");
// ~Play Command
exports.run = function (client, message, args) {
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
        var newQueue = new musicQueue();
        servers[message.guild.id] = newQueue;
    }
};
