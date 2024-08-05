import jwt from "jsonwebtoken";
import { User } from "../model/newUserSchema.js";

const SECRETKEY = process.env.SECRETKEY;

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.cookie.split(";")[0];
    const token = authHeader.split("=")[1];

    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    const verified = jwt.verify(token, SECRETKEY);
    const user = await User.findOne({
      _id: verified._id,
      "tokens.token": token,
    });

    if (!user) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};

export default authenticate;
