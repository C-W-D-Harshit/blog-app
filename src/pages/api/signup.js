import initDB from "../../../helpers/initDB";
import User from "../../../models/userModel";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      res.status(422).json({
        error: "Please Add all the required fields",
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(422).json({ error: "User already exists!" });
    }
    const hp = await bcrypt.hash(password, 12);
    const nUser = await new User({
      username,
      email,
      password: hp,
    }).save();
    if (!nUser) {
      res.status(500).json({
        error: "Server Error",
      });
    }
    res.status(201).json({
      success: true,
      nUser,
    });
  } catch (err) {
    console.log(err);
  }
}
