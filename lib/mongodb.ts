import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

let cached = global.mongooseConnection;

if (!cached) {
  cached = global.mongooseConnection = { connection: null, promise: null };
}

const dbConnect = async () => {
  if (cached.connection) {
    return cached.connection;
  }

  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, options).then((mongoose) => {
      return mongoose;
    });
  }
  cached.connection = await cached.promise;
  return cached.connection;
};

export default dbConnect;
