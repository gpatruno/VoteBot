import { CommandInteraction, ChatInputApplicationCommandData, Client } from "discord.js";

interface Command extends ChatInputApplicationCommandData {
    run: (client: Client, interaction: CommandInteraction) => void;
}

export { Command };