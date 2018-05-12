/*
 * Super Basic Queue for the Music.
 * -- Probably could have taken some lib somewhere but w/e.
 *
 * -- Basic Array with 2 pointers for O(1) operations.
 * -- JS has automatic garbage management right? or this is dumb.
 */
var MusicQueue = /** @class */ (function () {
    function MusicQueue() {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
    }
    MusicQueue.prototype.empty = function () {
        return (this.head == this.tail);
    };
    MusicQueue.prototype.push = function (thing) {
        this.queue.push(thing);
        this.tail += 1;
    };
    MusicQueue.prototype.pop = function () {
        if (this.empty())
            return;
        var thing = this.queue[this.head];
        this.queue[this.head] = null;
        this.head += 1;
    };
    return MusicQueue;
}());
// export
module.exports = MusicQueue;
