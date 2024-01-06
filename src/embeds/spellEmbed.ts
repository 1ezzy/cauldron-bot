import { EmbedBuilder, Message } from "discord.js";

export const spellEmbed = (message: Message) => {
  return new EmbedBuilder().setColor("#da8fdb").setTitle(`${message.author}, here's ${message.content}`);
};
