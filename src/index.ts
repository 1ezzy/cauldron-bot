import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";

config();

// creates a new instance of the client
const client: Client<boolean> = new Client({
  intents: [GatewayIntentBits.Guilds],
});

// only run this once!
client.once(Events.ClientReady, (readyClient: Client<true>) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

//log in to discord with the token
client.login(process.env.CLIENT_TOKEN);
