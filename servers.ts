import { MusicQueue } from "./musicQueue.js";
import { VoiceConnection } from "discord.js";

/*
 * "Server" object.
 *  - Holds objects related to music-playing like:
 *  - the MusicQueue, VoiceConnection, playing status
 */
class Server {

    queue: MusicQueue;
    voiceCon: VoiceConnection | null;
    playing: boolean;

    constructor() {
        this.queue = new MusicQueue();
        this.voiceCon = null;
        this.playing = false;
    };

    setMusicQueue(q: MusicQueue) {
        this.queue = q;
    }

    setVoiceConnection(vc: VoiceConnection) {
        this.voiceCon = vc;
    }

    setPlaying(p: boolean) {
        this.playing = p;
    }
}


// Export
export { Server };
