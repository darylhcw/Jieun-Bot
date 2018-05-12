import { Client, Message } from "discord.js"

// ~Hello Command
exports.run = (client: Client, message: Message, args: string[]) => {
    message.channel.send("Annyeong Haseyo! IU-imnida~").catch(console.error);
}



