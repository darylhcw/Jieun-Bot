
/*
 *  Use YTDL-Core to stream yt videos.
 *  - This file should contain all YTDL-core functions. 
 */
import { Message, VoiceConnection } from "discord.js";
import { Server } from "./servers.js";

const YTDL = require("ytdl-core");
const SERVERS = require("./app.js");


// Dls and plays a yt vid (AUDIO only)
function youtubePlay(voiceCon: VoiceConnection, message: Message) {
    let server: Server = SERVERS[message.guild.id];
    voiceCon.playStream(YTDL(server.queue.pop(), { filter: "audioonly" }));
};


//     let server: Server = SERVERS[message.guild.id];
//    const streamOptions = { seek: 0, volume: 1 };
//    const stream = YTDL(server.queue.pop(), { filter: "audioonly" });
//    const dispatcher = voiceCon.playStream(stream, streamOptions);

export { youtubePlay };
