import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = await req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
   const newUser =  new User({ username, email, hashedPassword });
   await newUser.save()
    res.status(201).json({ message: "User created successfully!!!" });
  } catch (error) {
    next(errorHandler(500,"error from server"));
  }
};

export const signin = async (req, res) => {};
