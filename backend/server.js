import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import Product from "./models/Product.js";

dotenv.config();

const app = express();

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });
app.use(express.json());
app.post("/api/products", async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill in all fields" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({
      success: true,
    });
  } catch (error) {
    console.log("error creating the  product", error);
    res.status(500).json({ success: false, message: "Error creating product" });
  }
});

app.delete("api/products/:id"  , async (req, res) => {
    const {id} = req.params



})


app.listen(5000, () => {
  connectDb();
  console.log("Server is running at http://localhost:5000 ");
});
