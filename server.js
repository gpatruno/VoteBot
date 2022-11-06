const Discord = require("discord.js");
const config = require("./config.json");

const myIntents = new Discord.IntentsBitField();
myIntents.add(Discord.IntentsBitField.Flags.GuildMessages, Discord.IntentsBitField.Flags.Guilds, Discord.IntentsBitField.Flags.MessageContent);
const client = new Discord.Client({ intents: myIntents });

const prefix = "!";
let idUserCreateVote = "Stakeholder";
let idUserToVote = "Zoinloz";
let currentVote = null;

client.on('ready', () => {
    console.log("The Bot is Ready!")
});

client.on("messageCreate", function (message) {
    console.log(message);
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    switch (command) {
        case "ping":
            const timeTaken = Date.now() - message.createdTimestamp;
            message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
            break;
        case "help":
            message.reply("Liste des commandes disponibles : \n"
                + "- HELP              Montre les commandes disponibles\n"
                + "- MUTE < username > (Créé un vote pour mute un joueur -> <username>)\n"
                + "- MOVE <username> <destination> (Créé un vote pour move un joueur -> <username> vers la destination -> <destination>)\n"
                + "- KICK <username>   (Créé un vote pour kick un joueur -> <username>)\n"
                + "- BAN  <username>   (Créé un vote pour bannir un joueur -> <username>)\n"
                + "- VOTE <yes/no>     (Permet de voter pour le vote en cours)\n"
                + "- SHOW              (Montre le vote en cours avec le nombre de vote Oui/Non)"
            );
            break;
        case "current":
            if (idUserCreateVote) {
                message.reply(`The current vote is created by: ${idUserCreateVote}`);
            } else {
                message.reply(`Pas de vote pour l'instant`);
            }
        case "show":
            if (currentVote != null && !currentVote.isEmpty()) {
                message.reply("Le vote a était créé par : " + idUserCreateVote.toUpperCase() + " \n"
                    + "Le vote concerne : " + idUserToVote.toUpperCase() + " \n"
                    + "Nombre de vote POUR : " + nbVoteYes + " / Nombre de vote CONTRE : " + nbVoteNo);
            } else {
                message.reply("Il n'y a pas de vote en cours. Tu peux créer un vote !");
            }
            break;
        default:
    }
});

client.login(config.BOT_TOKEN);
