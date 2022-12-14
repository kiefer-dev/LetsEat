const mongoose = require("mongoose");

const RestaurantCommentSchema = new mongoose.Schema({
    comment: { type: String, required: true },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
    addedBy: { type: String, ref: "User" },
    addedById: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    entryDate: { type: Date, default: Date.now },
})

module.exports = mongoose.model("RestaurantComment", RestaurantCommentSchema);