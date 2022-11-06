const Discord = require("discord.js");
require('dotenv').config()

const myIntents = new Discord.IntentsBitField();
myIntents.add(Discord.IntentsBitField.Flags.GuildMessages, Discord.IntentsBitField.Flags.Guilds, Discord.IntentsBitField.Flags.MessageContent);
const client = new Discord.Client({ intents: myIntents });

const prefix = "!";
let idUserCreateVote = "";
let idUserToVote = "";
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

client.login(process.env.TOKEN);
