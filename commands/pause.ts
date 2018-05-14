import { Client, Message } from "discord.js";
import { Server } from "../servers.js";

const SERVERS = require("../app.js");

/*
 * ~Pause command
 */
exports.run = (client: Client, message: Message, args: string[]) => {

    // Nothing playing in the first place
    let server = SERVERS[message.guild.id];
    if (!server) return;
    if (!server.playing) return;

    let vc = server.voiceCon;
    vc.dispatcher.pause();
    server.setPlaying(false);
    console.log(server.playing);
}





