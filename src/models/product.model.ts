import mongoose from "mongoose";

const mongooseLeanId = require("mongoose-lean-id");

const Schema = mongoose.Schema;

const product = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0.0,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

product.plugin(mongooseLeanId);

product.set("toObject", { virtuals: true });
product.set("toJSON", { virtuals: true });

const Product = mongoose.model("Product", product);

export default Product;
