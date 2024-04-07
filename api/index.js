import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();


app.use(cookieParser());
app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB connection successfull");
  })
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("Server running");
});
