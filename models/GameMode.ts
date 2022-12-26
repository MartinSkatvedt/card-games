import mongoose from "mongoose";

const GameSchema = new mongoose.Schema(
  {
    deck: { type: [mongoose.Types.ObjectId] },
    player_1_hand: { type: [mongoose.Types.ObjectId] },
    player_1_hidden: { type: [mongoose.Types.ObjectId] },
    player_1_open: { type: [mongoose.Types.ObjectId] },
    player_2_hand: { type: [mongoose.Types.ObjectId] },
    player_2_hidden: { type: [mongoose.Types.ObjectId] },
    player_2_open: { type: [mongoose.Types.ObjectId] },
    graveyard: { type: [mongoose.Types.ObjectId] },
    turn: { type: Number, default: 1 },
  },
  { autoCreate: true, timestamps: true }
);

export const GameModel =
  mongoose.models.GameModel || mongoose.model("GameModel", GameSchema);

export type GameApiType = {
  deck: string[];
  player_1_hand: string[];
  player_1_hidden: string[];
  player_1_open: string[];
  player_2_hand: string[];
  player_2_hidden: string[];
  player_2_open: string[];
  graveyard: string[];
  id: string;
  turn: Number;
};
