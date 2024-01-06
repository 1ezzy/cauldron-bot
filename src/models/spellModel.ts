import mongoose, { Model } from "mongoose";
import { SpellSchema } from "../schemas/spellSchema.ts";
import { SpellDoc } from "../types/spellType.ts";

export const Spell: Model<SpellDoc> = mongoose.model<SpellDoc>(
  "Spell",
  SpellSchema
);
