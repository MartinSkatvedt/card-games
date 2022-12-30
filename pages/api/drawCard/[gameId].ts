import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/mongodb";
import { GameModel } from "../../../models/GameModel";

type Data = {
  cardId?: string;
  error?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let card = "";
  switch (req.method) {
    case "POST":
      const { gameId } = req.query;

      try {
        await dbConnect();
        const response = await GameModel.findById(gameId);
        card = response.deck.pop();
        await GameModel.findByIdAndUpdate(gameId, response);
      } catch (e) {
        console.log(e);
        res.status(500).end();
      }
      res.status(200).json({ cardId: card });
    default:
      res.status(405).end();
  }
};
export default handler;
