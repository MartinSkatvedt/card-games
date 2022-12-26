import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/mongodb";
import { CardModel } from "../../models/CardModel";
import { GameModel } from "../../models/GameMode";

type Data = {
  gameId: string;
  error?: string;
};

const shuffleDeck = (deck: string[]): string[] => {
  let returnDeck = deck;
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [returnDeck[i], returnDeck[j]] = [deck[j], deck[i]];
  }
  return returnDeck;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let responseId = "";
  switch (req.method) {
    case "POST":
      try {
        await dbConnect();
        const deck = shuffleDeck(
          (await CardModel.find()).map((card) => card._id)
        );

        const response = await GameModel.create({ deck });
        responseId = response._id.toString();
      } catch (e) {
        console.log(e);
        res.status(500).end();
      }
      res.status(200).json({ gameId: responseId });
    default:
      res.status(405).end();
  }
};
export default handler;
