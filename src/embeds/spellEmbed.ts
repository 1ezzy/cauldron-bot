import { EmbedBuilder } from "discord.js";
import { SpellDoc } from "../types/spellType.ts";
import { formatSpellLevelWithSchool } from "../utils.ts";

export const spellEmbed = (spell: SpellDoc, author: string) => {
  return new EmbedBuilder()
    .setColor("#da8fdb")
    .setTitle(`${author}, here's ${spell.name}`)
    .addFields(
      {
        name: `${formatSpellLevelWithSchool(spell.level, spell.school.name)}`,
        value: `**Classes**: ${spell.classes
          .map((value) => value.name)
          .join(", ")}`,
      },
      {
        name: "\u200b",
        value: `**Casting Time**: ${spell.casting_time}\n**Range**: ${spell.range}\n**Duration**: ${spell.duration}`,
      },
      {
        name: "\u200b",
        value: `${spell.desc.map((value) => value).join("\n\n")}`,
      }
    );
};
