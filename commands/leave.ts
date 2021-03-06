
import { Client, Message, Collection } from "discord.js";

/*
 * ~Leave Command
 */
exports.run = (client: Client, message: Message, args: string[]) => {

    if (args.length > 0) return;

    // Check voiceConnections, then check if message is same guild as voiceConnections
    let senderGuildId = message.guild.id;
    let voiceConnections = client.voiceConnections;

    // Can't solve these TS errors here but it's cool.
    // Collection definitely has "has" and "get".
    if (voiceConnections.has(senderGuildId)) {
        var voiceConnection = voiceConnections.get(senderGuildId)
        var voiceCh = voiceConnection.channel;
        message.reply(`Okay, I left \"${voiceCh.name}\".`);
        voiceCh.leave();
    }

}
