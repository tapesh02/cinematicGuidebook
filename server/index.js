import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { getConnection } from "./databaseConnection.js";
import { signup, signin } from "./authRoute.js";

getConnection();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: `${process.env.BACKEND_URL}`,
    methods: "GET,PATCH,POST,DELETE",
    credentials: true,
    headers: "Content-Type",
  }),
);

app.get("/", (req, res) => {
  res.send(`hello am backend server, ${process.env.BACKEND_URL} `);
});

app.post("/signup", signup);
app.post("/signin", signin);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
