import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../model/newUserSchema.js";

const SECRETKEY = process.env.SECRETKEY;

export const signup = async (req, res) => {
  const { username, email, createPassword, retypePassword } = req.body;

  if (!username || !email || !createPassword || !retypePassword) {
    return res.status(422).json({ error: "Please enter valid details" });
  }

  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      res.status(422).json({ error: "Email already exists" });
    } else if (createPassword !== retypePassword) {
      res.status(422).json({ error: "Passwords do not match" });
    } else {
      // Hash the password before saving it
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(createPassword, salt);

      const user = new User({
        username,
        email,
        createPassword: hashedPassword,
      });
      const userRegistered = await user.save();

      if (userRegistered) {
        res.status(201).json({ message: "Signup successful" });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, createPassword } = req.body;

    if (!email || !createPassword) {
      return res.status(400).json({ error: "Please enter valid credentials" });
    }

    const user = await User.findOne({ email: email });

    if (user) {
      const isValidUser = await bcrypt.compare(
        createPassword,
        user.createPassword,
      );
      if (isValidUser) {
        const token = jwt.sign({ _id: user._id }, SECRETKEY);
        user.tokens = user.tokens.concat({ token });
        await user.save();

        res.cookie("signinToken", token, {
          httpOnly: true,
          sameSite: "strict",
          secure: "true",
          maxAge: (2 * 60 * 60 + 3 * 60 + 10) * 1000,
        });

        res.status(200).json({ message: "Sign-in successful" });
      } else {
        res.status(400).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const signout = (req, res) => {
  res.cookie("signinToken", "", { maxAge: 1 });
  res.status(200).json({ message: "signout successfully" });
};

export const userRoute = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // You can customize what details you want to send back
    const userDetails = {
      username: user.username,
      email: user.email,
      // Add other details as required
    };

    res.status(200).json(userDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
