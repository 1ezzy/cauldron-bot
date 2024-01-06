import mongoose, { Schema, Types } from "mongoose";
import { APIReferenceDoc, AreaOfEffectDoc } from "./genericTypes.ts";

export interface SpellDoc extends mongoose.Document {
  index: string;
  name: string;
  url: string;
  desc: string[];
  higher_level: string[];
  range: string;
  components: string[];
  material: string;
  area_of_effect: AreaOfEffectDoc;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type: string;
  damage: Schema.Types.Mixed;
  school: APIReferenceDoc;
  classes: APIReferenceDoc[];
  subclasses: APIReferenceDoc[];
  spellbook_ids: Types.ObjectId;
  spellbooks: Schema.Types.Mixed;
}
