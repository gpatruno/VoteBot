import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { Command } from "../Command";

export const Help: Command = {
    name: "help",
    description: "Returns all commands VoteBot",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Liste des commandes disponibles : \n"
            + "- help              Montre les commandes disponibles\n"
            + "- ping              Retourne le ping du message\n"
            + "- muta <username> (Créé un vote pour mute un joueur -> <username>)\n"
            + "- move <username> <destination> (Créé un vote pour move un joueur -> <username> vers la destination -> <destination>)\n"
            + "- kick <username>   (Créé un vote pour kick un joueur -> <username>)\n"
            + "- ban  <username>   (Créé un vote pour bannir un joueur -> <username>)\n"
            + "- vote <yes/no>     (Permet de voter pour le vote en cours)\n"
            + "- show              (Montre le vote en cours avec le nombre de vote Oui/Non)"
            ;

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};