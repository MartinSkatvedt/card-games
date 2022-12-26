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
        console.log(cardId);
        await CardModel.findById(cardId); //Check that card exists
        const mongooseCardId = new mongoose.Types.ObjectId(cardId);

        if (player == 1) {
          gameResponse.player_1_hand.push(mongooseCardId);
        } else if (player == 2) {
          gameResponse.player_2_hand.push(mongooseCardId);
        }
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
