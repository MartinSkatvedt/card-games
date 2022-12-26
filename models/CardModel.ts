import mongoose from "mongoose";
import { CardCategory } from "../features/card/types/CardType";

const CardSchema = new mongoose.Schema(
  {
    value: { type: Number },
    category: { type: String },
  },
  { autoCreate: true }
);

export const CardModel =
  mongoose.models.CardModel || mongoose.model("CardModel", CardSchema);

export type CardApiType = {
  value: Number;
  category: CardCategory;
  id: string;
};
