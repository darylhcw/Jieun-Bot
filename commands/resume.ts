import { Client, Message } from "discord.js";
import { Server } from "../servers.js"

const SERVERS = require("../app.js");

/*
 * ~Resume Command
 */
exports.run = (client: Client, message: Message, args: string[]) => {

    let server = SERVERS[message.guild.id];
    if (!server) return;
    if (server.playing) return;

    let vc = server.voiceCon;
    if (!vc) return;
    if (vc.dispatcher.paused) {
        vc.dispatcher.resume();
        server.setPlaying(true);
    }
}
