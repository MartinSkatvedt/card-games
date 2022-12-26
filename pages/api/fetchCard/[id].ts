import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/mongodb";
import { CardApiType, CardModel } from "../../../models/CardModel";
import { GameModel } from "../../../models/GameMode";

type Data = {
  cardData?: CardApiType | null;
  error?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let card: CardApiType | null = null;
  switch (req.method) {
    case "GET":
      const { id } = req.query;

      try {
        await dbConnect();
        card = await CardModel.findById(id);
      } catch (e) {
        console.log(e);
        res.status(500).end();
      }
      res.status(200).json({ cardData: card });
    default:
      res.status(405).end();
  }
};
export default handler;
