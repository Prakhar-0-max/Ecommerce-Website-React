import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import orderRoutes from "./routes/order.route.js";
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true                
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);


app.get("/", (req, res) => {
  res.send("E-commerce API Running ");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(" Connected to MongoDB");
    app.listen(5000, () => console.log(" Server running at port 5000"));
  })
  .catch((err) => console.error(" DB Error:", err));