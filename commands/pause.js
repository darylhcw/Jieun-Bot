"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SERVERS = require("../app.js");
/*
 * ~Pause command
 */
exports.run = function (client, message, args) {
    // Nothing playing in the first place
    var server = SERVERS[message.guild.id];
    if (!server)
        return;
    if (!server.playing)
        return;
    var vc = server.voiceCon;
    vc.dispatcher.pause();
    server.setPlaying(false);
    console.log(server.playing);
};
