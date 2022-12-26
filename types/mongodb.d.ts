import { MongoClient } from "mongodb";

declare global {
  var mongooseConnection: { connection: any; promise: any };
}
