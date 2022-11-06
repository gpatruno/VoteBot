import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { Command } from "../Command";

export const Ping: Command = {
    name: "ping",
    description: "Returns a ping",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const timeTaken = (Date.now() - interaction.createdTimestamp);
        const content = "Pong! This message had a latency of " + timeTaken + "ms.";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};