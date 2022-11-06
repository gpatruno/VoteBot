import { CommandInteraction, Client, Message } from "discord.js";
import { Commands } from "../Commands";

const prefix = "!";

export default (client: Client): void => {
    client.on("messageCreate", async (message: Message<boolean>) => {
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
        if (await handleSlashCommand(client, message)) return;
    });
};

const handleSlashCommand = async (client: Client, message: Message<boolean>): Promise<boolean> => {
    // handle slash command here    
    const commandBody: string = message.content.slice(prefix.length);
    const args: string[] = commandBody.split(' ');
    const command: string = args[0].toLowerCase();

    const slashCommand = Commands.find(c => c.name === command);
    if (!slashCommand) {
        message.reply({ content: "An error has occurred" });
        return false;
    }

    console.log(message.content);
    switch (command) {
        case "vote":
            break;
        default:
            break;
    }

    return true;
};