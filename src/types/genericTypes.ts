import mongoose from "mongoose";

export interface APIReferenceDoc extends mongoose.Document {
  index: string;
  name: string;
  url: string;
}

export interface AreaOfEffectDoc extends mongoose.Document {
  size: number;
  type: string;
}
