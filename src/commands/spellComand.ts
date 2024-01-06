import { Spell } from "../models/spellModel.ts";
import { SpellDoc } from "../types/spellType.ts";

export const spellCommand = async (msg): Promise<SpellDoc | null> => {
  const res: SpellDoc | null = await Spell.findOne({
    index: msg,
  });

  return res;
};
