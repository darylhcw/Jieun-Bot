import { Client } from "discord.js"
import { Message } from "discord.js"

// ~Hello Command
exports.run = (client: Client, message: Message, args: any[]) => {
    message.channel.send("Annyeong Haseyo! IU-imnida~").catch(console.error);
}



