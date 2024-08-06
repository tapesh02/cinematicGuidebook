import mongoose from "mongoose";

const newUserSchema = new mongoose.Schema({
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createPassword: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  country: {
    type: String,
  },
  genre: {
    type: String,
  },
});

export const User = mongoose.model("newUser", newUserSchema);
