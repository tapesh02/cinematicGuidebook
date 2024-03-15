import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_DATABASE_URI;

export const getConnection = async () => {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  async function run() {
    try {
      await client.connect();

      await client.db("admin").command({ ping: 1 });
      console.log("You successfully connected to MongoDB!");
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
};
