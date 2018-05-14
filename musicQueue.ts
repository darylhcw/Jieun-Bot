
/*
 * Super Basic Queue for the Music.
 * -- Probably could have taken some lib somewhere but w/e.
 * 
 * -- Basic Array with 2 pointers for O(1) operations.
 * -- JS has automatic garbage management right? or this is dumb. 
 */

class MusicQueue {

    queue: any[];
    head: number;
    tail: number;

    constructor() {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
    }

    isEmpty() {
        return (this.head == this.tail)
    }

    push(thing: any) {
        this.queue.push(thing);
        this.tail += 1
    }

    pop(): any | null {
        if (this.isEmpty()) return;
        let thing = this.queue[this.head];
        this.queue[this.head] = null;
        this.head += 1
        return thing;
    }

}


// export
export { MusicQueue };
