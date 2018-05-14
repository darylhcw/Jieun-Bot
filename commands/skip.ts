
import { Client, Message } from "discord.js";

const SERVERS = require("../app.js");

/*
 * ~Skip Command
 */
exports.run = (client: Client, message: Message, args: string[]) => {

    let server = SERVERS[message.guild.id];
    if (!server) return;

    let vc = server.voiceCon;
    vc.dispatcher.end();

}
