import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";

import { User } from "./model/newUserSchema.js";
import { getConnection } from "./databaseConnection.js";

const app = express();

// Database connection
getConnection();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "https://localhost:5000",
    methods: "GET,PATCH,POST,DELETE",
    credentials: true,
    headers: "Content-Type",
  })
);

const SECRETKEY = process.env.SECRETKEY;

// Home Route
app.get("/", (req, res) => {
  res.send(`hello am backend server,${process.env.SECRETKEY} `);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
