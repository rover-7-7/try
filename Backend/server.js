import express from "express";
import dotenv from "dotenv";
const app = express();
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello ioworld");
});

app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
