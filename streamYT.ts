
/*
 *  Use YTDL-Core to stream yt videos.
 *  - This file should contain all YTDL-core functions. 
 */
import { VoiceConnection } from "discord.js";
import { Server } from "./servers.js";

const YTDL = require("ytdl-core");
const SERVERS = require("./app.js");

const streamOptions = { seek: 0, volume: 1 };

/*
 * Dls and plays a yt vid (AUDIO only)
 */
function youtubeStartPlay(server: Server) {

    if (server.queue.isEmpty()) {
        server.playing = false;
        return;
    }

    let stream = YTDL(server.queue.pop(), { filter: "audioonly" });
    let vc = server.voiceCon;

    const dispatcher = vc!.playStream(stream, streamOptions);
    dispatcher.on("end", () => youtubeStartPlay(server));
    server.setPlaying(true);
};


// exports
export { youtubeStartPlay };
