"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SERVERS = require("../app.js");
/*
 * ~Volume Command
 */
exports.run = function (client, message, args) {
    var server = SERVERS[message.guild.id];
    if (!server)
        return;
    var vc = server.voiceCon;
    if (!vc)
        return;
    // Instead of 0.00 to 2,
    // Show users 0 to 100, which makes more sense.
    var vol = vc.dispatcher.volume;
    var displayedVol = vol * 100 / 2;
    if (!args[0]) {
        message.channel.send("Current music volume is " + displayedVol);
        return;
    }
    if (args.length > 1) {
        message.reply("Hey, please use just one number from 1-100!");
        return;
    }
    var userVol = Number(args[0]);
    if (!userVol || userVol < 0 || userVol > 100) {
        message.reply("Hey, please give me a number from 1- 100!");
        return;
    }
    // When they don't do something stupid.
    vc.dispatcher.setVolume(userVol / 100 * 2);
    message.channel.send("Volume has been set to " + userVol + ".");
};
