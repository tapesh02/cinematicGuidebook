import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { getConnection } from "./database/databaseConnection.js";
import { signup, signin, signout } from "./routes/authRoute.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: [`${process.env.BACKEND_URL}`],
  methods: ["POST", "PATCH", "DELETE", "OPTIONS", "GET"],
  credentials: true,
  headers: "Content-Type",
};
app.use(cors(corsOptions));
getConnection();

app.get("/", (req, res) => {
  res.send("hello am backend server");
});

app.post("/signup", signup);
app.post("/signin", signin);
app.get("/signout", signout);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
