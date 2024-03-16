import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "./model/newUserSchema.js";

const SECRETKEY = process.env.SECRETKEY;

export const signup = async (req, res) => {
  const { username, email, createPassword, retypePassword } = req.body;

  if (!username || !email || !createPassword || !retypePassword) {
    return res.status(422).json({ error: "Please enter valid details" });
  }

  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (createPassword !== retypePassword) {
      return res.status(422).json({ error: "Passwords do not match" });
    } else {
      const user = new User({
        username,
        email,
        createPassword,
      });

      // Hash the password before saving it
      const salt = await bcrypt.genSalt(10);
      user.createPassword = await bcrypt.hash(createPassword, salt);

      const userRegistered = await user.save();

      if (userRegistered) {
        return res.status(201).json({ message: "Signup successful" });
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
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
      const isMatch = await bcrypt.compare(createPassword, user.createPassword);

      if (isMatch) {
        // Create and send a JWT token
        const token = jwt.sign({ _id: user._id }, SECRETKEY);
        user.tokens = user.tokens.concat({ token });
        await user.save();

        console.log("signinToken", token);
        // Set the token as a cookie
        res.cookie("signinToken", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });

        return res.status(200).json({ message: "Sign-in successful" });
      } else {
        return res.status(400).json({ error: "Invalid credentials" });
      }
    } else {
      return res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
