const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  restaurantName: { type: String, required: true },
  menuUrl: { type: String, required: true },
  tag: { type: String, required: true },
  addedBy: { type: String, ref: "User" },
  addedById: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  entryDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);