import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/mongodb";
import { CardModel } from "../../../models/CardModel";
import { GameApiType, GameModel } from "../../../models/GameMode";

type Data = {
  error?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  switch (req.method) {
    case "POST":
      const { gameId } = req.query;
      const { player, cardId } = req.body;

      if (!player || player < 1 || player > 2) {
        res.status(400).json({ error: "Invalid player" });
        return;
      }
      if (!cardId) {
        res.status(400).json({ error: "Missing cardId" });
        return;
      }

      try {
        await dbConnect();
        let gameResponse = await GameModel.findById(gameId);
        await CardModel.findById(cardId); //Check that card exists
        const mongooseCardId = new mongoose.Types.ObjectId(cardId);
        console.log(gameResponse);
        if (player == 1) {
          gameResponse.player_1_hand = gameResponse.player_1_hand.filter(
            (card: mongoose.Types.ObjectId) => card.toString != cardId
          );
        } else if (player == 2) {
          gameResponse.player_2_hand = gameResponse.player_2_hand.filter(
            (card: mongoose.Types.ObjectId) => card.toString() != cardId
          );
        }
        gameResponse.on_table.push(mongooseCardId);

        await GameModel.findByIdAndUpdate(gameId, gameResponse);
      } catch (e) {
        console.log(e);
        res.status(500).end();
        return;
      }
      res.status(200).end();
    default:
      res.status(405).end();
  }
};
export default handler;
