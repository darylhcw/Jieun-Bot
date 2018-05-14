"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const servers_js_1 = require("../servers.js");
const streamYT_js_1 = require(".././streamYT.js");
const YTDL = require("ytdl-core");
// Queue DS
const SERVERS = require("../app.js");
// ~Play Command
exports.run = (client, message, args) => {
    if (!args[0]) {
        message.reply("Sorry, you have to tell me what you want to play!");
        return;
    }
    if (!message.guild.voiceConnection) {
        message.reply("You have to invite me into a voice channel first!"
            + " -- Use ~Join <channel>");
        return;
    }
    // Create new server obj if non-existant
    if (!SERVERS[message.guild.id]) {
        let newServer = new servers_js_1.Server();
        SERVERS[message.guild.id] = newServer;
    }
    // Server already has its "Server" object.
    let server = SERVERS[message.guild.id];
    if (server.queue) {
        server.queue.push(args[0]);
        // If already playing, let it do its thing
        if (server.playing)
            return;
        // If not, see if there is a need to assign VC or just resume.
        if (!server.voiceCon) {
            let voiceConnection = message.guild.voiceConnection;
            server.voiceCon = voiceConnection;
            streamYT_js_1.youtubeStartPlay(server);
        }
    }
};
