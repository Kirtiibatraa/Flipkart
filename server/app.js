const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./src/config/database");
const productRoutes = require("./src/routes/productRoutes");
const dotenv = require("dotenv");
const PORT = 5000;
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Server running");
});
app.listen(PORT, () => {
  console.log("Server running on Port:" + PORT);
});
