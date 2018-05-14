import { MusicQueue } from "./musicQueue.js";

/*
 * "Server" object.
 *  - As of now only holds queue for music.
 */
class Server {

    queue: MusicQueue;

    constructor() {
        this.queue = new MusicQueue();
    };

    setMusicQueue(q: MusicQueue) {
        this.queue = q;
    }

}


// Export
export { Server };
