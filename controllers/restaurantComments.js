const Restaurant = require("../models/Restaurant");
const RestaurantComment = require("../models/RestaurantComment")

module.exports = {
  createComment: async (req, res) => {
    try {
      await RestaurantComment.create({
        comment: req.body.restaurantComment,
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
      await RestaurantComment.deleteOne({ _id: req.params.restaurantCommentId }); // Looking for the _id property that matches the clicked comment's commentid, sent up from the view.

      // Reload the page
      res.redirect(`/restaurants/${req.params.restaurantId}`);
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
