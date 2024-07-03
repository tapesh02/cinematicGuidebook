import "dotenv/config";
import express from "express";
import cors from "cors";

import { getConnection } from "./database/databaseConnection.js";
import authenticate from "./routes/authenticate.js";
import { signup, signin, signout, userRoute } from "./routes/authRoute.js";

const app = express();

app.use(express.json());

const corsOptions = {
  origin: [`${process.env.FRONTEND_URL}`],
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
app.get("/user", authenticate, userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
