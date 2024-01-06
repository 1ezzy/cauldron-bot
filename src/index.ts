import { config } from "dotenv";
import mongoose from "mongoose";
import { Client, Events, GatewayIntentBits, Message } from "discord.js";
import { spellCommand } from "./commands/spellComand.ts";
import { spellEmbed } from "./embeds/spellEmbed.ts";
import { SpellDoc } from "./types/spellType.ts";

config();

mongoose.set("strictQuery", false);

// creates a new instance of the client
const client: Client<boolean> = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
  ],
});

client.on(Events.MessageCreate, async (message: Message) => {
  const searchText = "!spell ";
  if (message.content.startsWith(searchText)) {
    const spellName = message.content.slice(searchText.length);
    const spellIndex = spellName.replace(/\s+/g, "-");

    const spell: SpellDoc | null = await spellCommand(spellIndex);
    if (spell) {
      const spellMessage = spellEmbed(spell, message.author.displayName);
      message.reply({ embeds: [spellMessage] });
    }
  }
});

client.once(Events.ClientReady, (readyClient: Client<true>) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

const main = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);

    //log in to discord with the token
    client.login(process.env.CLIENT_TOKEN!);
  } catch (error) {
    console.log(error);
  }
};

main();
