"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SERVERS = require("../app.js");
/*
 * ~Skip Command
 */
exports.run = function (client, message, args) {
    var server = SERVERS[message.guild.id];
    if (!server)
        return;
    var vc = server.voiceCon;
    vc.dispatcher.end();
};
