import mongoose from "mongoose";

export const APIReferenceSchema = new mongoose.Schema({
  index: String,
  name: String,
  url: String,
});

export const AreaOfEffectSchema = new mongoose.Schema({
  size: Number,
  type: String,
});
