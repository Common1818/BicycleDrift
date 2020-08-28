const mongoose = require("mongoose");

const PincodeSchema = new mongoose.Schema({
  cityCode: {
    type: String,
    required: true,
    unique: true,
  },
  cityName: {
    type: String,
    required: true,
  },
  deliveryCharge: {
    type: Number,
    required: true,
  },
  coverAllAreas: {
    type: Boolean,
    default: true,
  },
  excludedAreas: {
    type: [String],
    default: null,
  },
  includedAreas: {
    type: [String],
    default: null,
  },
});

module.exports = mongoose.model("Pincode", PincodeSchema);
