import { JsonWebTokenError } from "jsonwebtoken";
import initDB from "../../../helpers/initDB";
import User from "../../../models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(422).json({
        error: "Please Add all the required fields",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }
    const dm = await bcrypt.compare(password, user.password);
    if (dm) {
      const token = jwt.sign({ userId: User._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      const { username, role, email } = user;
      res.status(201).json({
        success: true,
        token,
        user: { username, role, email },
      });
    } else {
      res.status(401).json({ error: "Not Matched!" });
    }
  } catch (err) {
    console.log(err);
  }
}
