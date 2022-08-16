import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  id: String,
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});

const productModel = mongoose.model("product", productSchema);

export default productModel;
