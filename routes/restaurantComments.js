const express = require("express");
const router = express.Router();
const restaurantCommentsController = require("../controllers/restaurantComments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment Routes - only need a post and delete
router.post("/createComment/:id", restaurantCommentsController.createComment);
router.delete("/deleteComment/:restaurantId/:restaurantCommentId", restaurantCommentsController.deleteComment); // Sends the postId and commentId FROM THE VIEW along to the controller, to be used in its methods. You can send along as many as you want, just make sure that your request from the View sends everything along in the form action.

module.exports = router;