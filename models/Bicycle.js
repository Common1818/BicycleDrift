const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const BicycleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    agegroup: {
      min: { type: Number, min: 0 },
      max: { type: Number, min: 0 },
    },
    gender: {
      type: String, // Girls, Boys, For Both
      required: true,
    },
    color: {
      type: String, // A drop down list of colors
      default: 'Black',
    },
    price: {
      type: Number,
      required: true,
      maxlength: 32,
      trim: true,
    },
    framematerial: {
      type: String,
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
      ref: 'Category',
      required: true,
    },
    specifications: {
      type: ObjectId,
      ref: 'Specifications',
    },
    brand: {
      type: ObjectId,
      ref: 'Brand',
    },
    warranty: {
      type: ObjectId,
      ref: 'Warranty',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Bicycle', BicycleSchema);
