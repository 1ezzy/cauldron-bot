import mongoose, { Schema } from "mongoose";

const APIReferenceSchema = new mongoose.Schema({
  index: String,
  name: String,
  url: String,
});

const AreaOfEffectSchema = new mongoose.Schema({
  size: Number,
  type: String,
});

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
