"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ~Hello Command
exports.run = (client, message, args) => {
    if (!args[0]) {
        message.channel.send("Annyeong Haseyo! IU-imnida~").catch(console.error);
    }
};
