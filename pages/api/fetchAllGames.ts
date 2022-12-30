import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/mongodb";
import { GameModel } from "../../models/GameModel";

type Data = {
  gameIds: string[] | null;
  error?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let gameIds: string[] = [];
  switch (req.method) {
    case "GET":
      try {
        await dbConnect();
        gameIds = (await GameModel.find()).map((game) => game._id.toString());
      } catch (e) {
        console.log(e);
        res.status(500).end();
      }
      res.status(200).json({ gameIds });
    default:
      res.status(405).end();
  }
};
export default handler;
