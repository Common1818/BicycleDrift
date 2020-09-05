const mongoose = require("mongoose");

// City Electric Hybrid Road

const AdmindataSchema = new mongoose.Schema(
  {
    carousel: [{ imageUrl: { type: String } }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admindata", AdmindataSchema);
