import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      requiired: true,
      unique: true,
    },
    email: {
      type: String,
      requiired: true,
      unique: true,
    },
    password: {
      type: String,
      requiired: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User
