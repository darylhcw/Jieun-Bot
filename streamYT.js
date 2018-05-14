"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const YTDL = require("ytdl-core");
const SERVERS = require("./app.js");
// Dls and plays a yt vid (AUDIO only)
function youtubePlay(voiceCon, message) {
    let server = SERVERS[message.guild.id];
    voiceCon.playStream(YTDL(server.queue.pop(), { filter: "audioonly" }));
}
exports.youtubePlay = youtubePlay;
;
