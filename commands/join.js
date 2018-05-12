"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ~Join Command
exports.run = function (client, message, args) {
    if (args.length > 1) {
        message.reply("Please only enter one voice channel. It shouldn't have spaces!.");
        return;
    }
    var channelName = args[0];
    for (var _i = 0, _a = message.guild.channels.array(); _i < _a.length; _i++) {
        var ch = _a[_i];
        if (ch.name == channelName) {
            message.reply("Okay, I joined " + channelName);
            return;
        }
    }
    message.reply("Hey, I couldn't find the channel called \"" + channelName + "\"");
};
