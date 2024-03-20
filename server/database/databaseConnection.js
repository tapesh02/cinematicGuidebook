import mongoose from "mongoose";

const uri = process.env.MONGODB_DATABASE_URI;

export const getConnection = async () => {
  try {
    await mongoose.connect(uri);
    console.log("You have successfully connected to database");
  } catch (error) {
    console.log("error connecting database", error);
  }
};
