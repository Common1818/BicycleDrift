const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const AccessorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    brand: {
      type: ObjectId,
      ref: "Brand",
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
    description: {
      type: String,
    },
    specifications: {
      type: [{}],
    },
    price: {
      type: Number,
      required: true,
      maxlength: 50,
      trim: true,
    },
    actualPrice: {
      type: Number,
      maxlength: 50,
      trim: true,
    },
    warranty: {
      type: String,
      default: "Manufacturers Warrranty",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Accessory", AccessorySchema);
