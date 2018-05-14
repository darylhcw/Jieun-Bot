
import { Client, Message } from "discord.js";

/*
 * ~Quit Command
 */
exports.run = (client: Client, message: Message, args: string[]) => {
    message.channel.send("I'm going now, bye~");
    client.destroy();
}


