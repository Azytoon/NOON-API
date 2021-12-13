const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
<<<<<<< HEAD
    imageSrc: { type: String, required: true },
    quantity: { type: Number, required: true },
    // category: { type: Array, required: true},
    // subCat: { type: Array, required: true},
    // brand: { type: Array, required: true},
    categories: { type: Array, required: true},
    subCat: { type: String},
    brand: { type: String},
=======
    imageSrc: { type: String, required: true, default: "productdefault.png" },
    quantity: { type: Number, required: true },
    categories: { type: Array },
    subCat: { type: String },
    brand: { type: String },
>>>>>>> c05e154471e75ef923c4ab8eb9745f8d6f632a70
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
