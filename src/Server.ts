require('dotenv').config();
import { Client, IntentsBitField } from "discord.js";
import InteractionCreate from "./listeners/InteractionCreate";
import MessageCreate from "./listeners/MessageCreate";
import Ready from "./listeners/Ready";

console.log("Bot is starting...");

const myIntents = new IntentsBitField();
myIntents.add(IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.Guilds, IntentsBitField.Flags.MessageContent);
const client: Client<boolean> = new Client({
    intents: myIntents
});

Ready(client);
InteractionCreate(client);
MessageCreate(client);

client.login(process.env.TOKEN);
