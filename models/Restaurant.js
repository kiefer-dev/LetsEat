const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  restaurantName: { type: String, required: true, unique: true },
  menuUrl: {type:String, require:true},
  tag: {type:String},
  addedBy: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
  entryDate: {type:Date, default:Date.now},
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);