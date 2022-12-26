import type { NextApiRequest, NextApiResponse } from "next";
import { CardCategory } from "../../features/card/types/CardType";
import dbConnect from "../../lib/mongodb";
import { CardModel } from "../../models/CardModel";

type Data = {
  error?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  switch (req.method) {
    case "POST":
      try {
        await dbConnect();
        await CardModel.deleteMany();
        for (let category in CardCategory) {
          for (let i = 2; i <= 14; i++) {
            const obj = {
              value: i,
              category,
            };
            await CardModel.create(obj);
          }
        }
      } catch (e) {
        console.log(e);
        res.status(500).end();
      }
      res.status(200).end();
    default:
      res.status(405).end();
  }
};

export default handler;
