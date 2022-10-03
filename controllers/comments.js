const Restaurant = require("../models/Restaurant");
const Comment = require("../models/Comment")

module.exports = {
  createComment: async (req, res) => {
    try {
      await Comment.create({
        comment: req.body.comment,
        restaurantId: req.params.id,
        addedBy: req.user.userName,
        addedById: req.user.id, // The logged-in user's information is sent along with the request. Here, we're pulling their id and attaching it to the comment to store it in the db.
      });
      console.log("Comment has been added!");
      res.redirect(`/restaurants/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteComment: async (req, res) => {
    try {
      // Delete the comment from MongoDB using mongoose
      await Comment.deleteOne({ _id: req.params.commentId }); // Looking for the _id property that matches the clicked comment's commentid, sent up from the view.

      // Reload the page
      res.redirect(`/restaurants/${req.params.restaurantId}`);
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
