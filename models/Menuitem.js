const mongoose = require("mongoose");

const MenuitemSchema = new mongoose.Schema({
    item: { type: String, required: true },
    itemComment: { type: String, required: false },
    itemRating: { type: Number, default: 0 },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
    addedBy: { type: String, ref: "User" },
    addedById: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Menuitem", MenuitemSchema);