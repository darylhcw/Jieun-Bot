"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SERVERS = require("../app.js");
/*
 * ~Resume Command
 */
exports.run = function (client, message, args) {
    var server = SERVERS[message.guild.id];
    if (!server)
        return;
    if (server.playing)
        return;
    var vc = server.voiceCon;
    if (vc.dispatcher.paused) {
        vc.dispatcher.resume();
        server.setPlaying(true);
    }
};
