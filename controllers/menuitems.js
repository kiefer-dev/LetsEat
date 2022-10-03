const Restaurant = require("../models/Restaurant");
const Menuitem = require("../models/Menuitem")

module.exports = {
  createMenuitem: async (req, res) => {
    try {
      await RestaurantComment.create({
        item: req.body.item,
        restaurantId: req.params.id,
        addedBy: req.user.userName,
        addedById: req.user.id, // The logged-in user's information is sent along with the request. Here, we're pulling their id and attaching it to the comment to store it in the db.
      });
      console.log("Menuitem has been added!");
      res.redirect(`/restaurants/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteMenuitem: async (req, res) => {
    try {
      // Delete the menuitem from MongoDB using mongoose
      await Menuitem.deleteOne({ _id: req.params.menuitemId }); // Looking for the _id property that matches the clicked comment's commentid, sent up from the view.

      // Reload the page
      res.redirect(`/restaurants/${req.params.restaurantId}`);
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
