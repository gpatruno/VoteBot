import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { Command } from "../Command";

export const Vote: Command = {
    name: "vote",
    description: "Allows you to vote for the current vote",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        console.log(interaction);
        
        const content = "Votre vote a bien été pris en compte.";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};