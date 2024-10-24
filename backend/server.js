import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();


app.use(express.json());
app.use("/api/products", productRoutes);

app.listen(5000, () => {
  connectDb();
  console.log("Server is running at http://localhost:5000 ");
});
