import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
   res.cookie("token", token, {
  httpOnly: true,
  secure: false,
  sameSite: "Lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});

res.json({ message: "Signup successful" });

  } catch (err) {
    res.status(500).json({ message: "Signup failed", error: err.message });
    console.log(error)
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token, {
  httpOnly: true,
  secure: false, 
  sameSite: "Lax", 
  maxAge: 7 * 24 * 60 * 60 * 1000 
});

res.json({
  token,
  user,
  message: "Login successful",
});


  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

export const logout = (req, res) => {

  res.status(200).json({ message: "Logged out successfully" });
};



