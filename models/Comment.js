const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    comment: {type:String, required:true},
    restaurantId: {type:mongoose.Schema.Types.ObjectId, ref:"Restaurant"},
    addedBy: {type:String, ref:"User"},
    addedById: {type:mongoose.Schema.Types.ObjectId, ref:"User"}
})

module.exports = mongoose.model("Comment", CommentSchema);