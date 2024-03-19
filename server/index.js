import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { getConnection } from "./databaseConnection.js";
import { signup, signin } from "./authRoute.js";

getConnection();

const app = express();
let URL;

app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  URL = req.protocol + "://" + req.get("host") + req.originalUrl;
  next();
});

const allowedOrigins = ["http://localhost:3000", `${process.env.BACKEND_URL}`];

const getOrigins = (origin, callback) => {
  if (!origin || allowedOrigins.includes(origin)) {
    callback(null, true);
  } else {
    callback(new Error("Not allowed by CORS"));
  }
};

const corsOptions = {
  origin: getOrigins,
  methods: "GET,PATCH,POST,DELETE",
  credentials: true,
  headers: "Content-Type",
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send(`hello am backend server, ${URL} `);
});

app.post("/signup", signup);
app.post("/signin", signin);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
