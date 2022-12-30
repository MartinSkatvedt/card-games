import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/mongodb";
import { GameModel } from "../../../models/GameModel";

type Data = {
  deckLen?: Number;
  error?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let deckLen = 0;
  switch (req.method) {
    case "GET":
      const { gameId } = req.query;

      try {
        await dbConnect();
        const gameData = await GameModel.findById(gameId);
        deckLen = gameData.deck.length;
      } catch (e) {
        console.log(e);
        res.status(500).end();
        return;
      }
      res.status(200).json({ deckLen });
    default:
      res.status(405).end();
  }
};
export default handler;
