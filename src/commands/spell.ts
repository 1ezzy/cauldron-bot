import mongoose from "mongoose";
import { SpellSchema } from "../schema.js";

const Spell = mongoose.model("Spell", SpellSchema);

export const spellCommand = async (msg) => {
  const res = await Spell.findOne({
    index: msg,
  }).exec();

  return res;
};
