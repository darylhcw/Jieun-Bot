"use strict";
// Required/imported stuff
var Discord = require("discord.js");
var client = new Discord.Client();
var settings = require("./settings.json");
client.on("ready", function () {
    console.log("I'm online :)");
});
client.on("message", function (message) {
    if (message.author === client.user)
        return;
    if (message.content.startsWith("ping")) {
        message.channel.send("pong");
    }
});
client.login(settings.token);
