const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: { type: String },
  member: {
    type: String,
    // required: true,
  },
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  priceDB: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
