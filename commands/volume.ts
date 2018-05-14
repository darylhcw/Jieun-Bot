
import { Client, Message } from "discord.js";
import { Server } from "../servers.js";

const SERVERS = require("../app.js");

/*
 * ~Volume Command
 */
exports.run = (client: Client, message: Message, args: string[]) => {

    let server = SERVERS[message.guild.id];
    if (!server) return;

    let vc = server.voiceCon;
    if (!vc) return;

    const vol: number = vc.dispatcher.volume
    var displayedVol: number = vol * 100 / 2

    if (!args[0]) {
        message.channel.send(`Current music volume is ${displayedVol}`);
        return;
    }

    if (args.length > 1) {
        message.reply("Hey, please use just one number from 1-100!");
        return;
    }

    var userVol: number = Number(args[0]);
    if (!userVol || userVol < 1 || userVol > 100) {
        message.reply("Hey, please give me a number from 1- 100!");
        return;
    }

    // When they don't do something stupid.
    vc.dispatcher.setVolume(userVol / 100 * 2);
    message.channel.send(`Volume has been set to ${userVol}.`);
}


