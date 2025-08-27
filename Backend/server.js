import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import promptRoutes from "./routes/promptRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());

// Routes
app.use("/api/prompts", promptRoutes);

// DB Connection
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
