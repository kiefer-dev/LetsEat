const Restaurant = require("../models/Restaurant");
const RestaurantComment = require("../models/RestaurantComment")
const Menuitem = require("../models/Menuitem")

module.exports = {
  getProfile: async (req, res) => {
    try {
      const restaurants = await Restaurant.find({ user: req.user.id });
      res.render("profile.ejs", { restaurants: restaurants, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const restaurants = await Restaurant.find().sort({ restaurantName: "asc" }).lean();
      res.render("feed.ejs", { restaurants: restaurants });
    } catch (err) {
      console.log(err);
    }
  },
  getRestaurant: async (req, res) => {
    try {
      const restaurant = await Restaurant.findById(req.params.id);
      const restaurantComments = await RestaurantComment.find({ restaurantId: req.params.id }).sort({ createdAt: "desc" }).lean();
      const menuitems = await Menuitem.find({ restaurantId: req.params.id }).sort({ createdAt: "ascending" }).lean();
      res.render("restaurant.ejs", { restaurant: restaurant, user: req.user, restaurantComments: restaurantComments, menuitems: menuitems });
    } catch (err) {
      console.log(err);
    }
  },
  createRestaurant: async (req, res) => {
    try {
      console.log(req.body);

      await Restaurant.create({
        restaurantName: req.body.restaurantName,
        menuUrl: req.body.menuUrl,
        tag: req.body.tag,
        addedBy: req.user.userName,
        addedById: req.user.id
      });
      console.log("Restaurant has been added!");
      res.redirect("/feed");
    } catch (err) {
      console.log(err);
    }
  },
  deleteRestaurant: async (req, res) => {
    try {
      // Delete from db
      await Restaurant.deleteOne({ _id: req.params.id });
      await RestaurantComment.deleteMany({ restaurantId: req.params.id });
      await Menuitem.deleteMany({ restaurantId: req.params.id });
      console.log("Deleted Restaurant");
      res.redirect("/feed");
    } catch (err) {
      res.redirect("/feed");
    }
  },
};