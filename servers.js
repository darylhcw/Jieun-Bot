"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const musicQueue_js_1 = require("./musicQueue.js");
/*
 * "Server" object.
 *  - Holds objects related to music-playing like:
 *  - the MusicQueue, VoiceConnection, playing status
 */
class Server {
    constructor() {
        this.queue = new musicQueue_js_1.MusicQueue();
        this.voiceCon = null;
        this.playing = false;
    }
    ;
    setMusicQueue(q) {
        this.queue = q;
    }
    setVoiceConnection(vc) {
        this.voiceCon = vc;
    }
    setPlaying(p) {
        this.playing = p;
    }
}
exports.Server = Server;
