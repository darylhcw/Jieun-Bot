"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * ~Quit Command
 */
exports.run = (client, message, args) => {
    message.channel.send("I'm going now, bye~");
    client.destroy();
};
