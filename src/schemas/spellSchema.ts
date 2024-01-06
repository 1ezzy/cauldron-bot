import mongoose, { Schema } from "mongoose";
import { AreaOfEffectSchema, APIReferenceSchema } from "./genericSchemas.ts";

export const SpellSchema = new mongoose.Schema({
  index: String,
  name: String,
  url: String,
  desc: [String],
  higher_level: [String],
  range: String,
  components: [String],
  material: String,
  area_of_effect: AreaOfEffectSchema,
  ritual: Boolean,
  duration: String,
  concentration: Boolean,
  casting_time: String,
  level: Number,
  attack_type: String,
  damage: Schema.Types.Mixed,
  school: APIReferenceSchema,
  classes: [APIReferenceSchema],
  subclasses: [APIReferenceSchema],
  spellbook_ids: Schema.Types.ObjectId,
  spellbooks: Schema.Types.Mixed,
});
