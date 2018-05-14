"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const musicQueue_js_1 = require("./musicQueue.js");
/*
 * "Server" object.
 *  - As of now only holds queue for music.
 */
class Server {
    constructor() {
        this.queue = new musicQueue_js_1.MusicQueue();
    }
    ;
    setMusicQueue(q) {
        this.queue = q;
    }
}
exports.Server = Server;
