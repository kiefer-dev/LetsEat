const RestaurantComment = require("../models/RestaurantComment")

module.exports = {
  createComment: async (req, res) => {
    try {
      await RestaurantComment.create({
        comment: req.body.restaurantComment,
        restaurantId: req.params.id,
        addedBy: req.user.userName,
        addedById: req.user.id,
      });
      console.log("Comment has been added!");

      res.redirect(`/restaurants/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteComment: async (req, res) => {
    try {
      await RestaurantComment.deleteOne({ _id: req.params.restaurantCommentId });

      res.redirect(`/restaurants/${req.params.restaurantId}`);
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
