import express from "express";
import cors from "cors";
import cooki_parser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
const app = express();

app.use(cors());
app.use(cooki_parser());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(200, () => {
  console.log("Server running");
});
