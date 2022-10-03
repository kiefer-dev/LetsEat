const mongoose = require("mongoose");

const MenuitemSchema = new mongoose.Schema({
    item: {type:String, require:true},
    restaurantId: {type:mongoose.Schema.Types.ObjectId, ref:"Restaurant"},
    addedBy: {type:String, ref:"User"},
    addedById: {type:mongoose.Schema.Types.ObjectId, ref:"User"}
    // rating: {type:Number, default: 0},
    // timesOrdered: {type:Number, default: 0}
})

module.exports = mongoose.model("Menuitem", MenuitemSchema);