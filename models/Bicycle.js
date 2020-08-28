const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String, // Girls, Boys, For Both
      required: true,
    },
    age: {
      min: {
        type: Number,
        default: 2,
      },
      max: {
        type: Number,
        default: 60,
      },
    },
    color: {
      type: String, // A drop down list of colors
      default: "Black",
    },
    stock: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      maxlength: 50,
      trim: true,
    },
    actualPrice: {
      type: Number,
      required: true,
      maxlength: 50,
      trim: true,
    },
    description: {
      type: String,
    },
    modelyear: {
      type: Number,
    },
    instock: {
      type: Boolean,
      default: true,
    },
    images: {
      type: [String],
      required: true,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    specifications: {
      type: ObjectId,
      ref: "Specifications",
    },
    accessorySpecifications: {
      type: [{}],
    },
    brand: {
      type: ObjectId,
      ref: "Brand",
    },
    warranty: {
      type: String,
      default: "Manufacturers Warrranty",
    },
    productType: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
