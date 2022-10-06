const Restaurant = require("../models/Restaurant");
const RestaurantComment = require("../models/RestaurantComment")
const Menuitem = require("../models/Menuitem")

module.exports = {
  getProfile: async (req, res) => {
    try {
      const restaurants = await Restaurant.find({ user: req.user.id }); // Get all the restaurants tied to the logged-in user
      res.render("profile.ejs", { restaurants: restaurants, user: req.user }); // Pass those restaurants and the user's info to profile.ejs
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const restaurants = await Restaurant.find().sort({ restaurantName: "asc" }).lean(); // Get all of the restaurants in the db, sorted alphabetically
      res.render("feed.ejs", { restaurants: restaurants }); // Pass those restaurants to the feed view
    } catch (err) {
      console.log(err);
    }
  },
  getRestaurant: async (req, res) => {
    try {
      const restaurant = await Restaurant.findById(req.params.id); // Find a specific restaurant
      const restaurantComments = await RestaurantComment.find({ restaurantId: req.params.id }).sort({ createdAt: "desc" }).lean(); // Find all of the comments tied to that specific restaurant
      const menuitems = await Menuitem.find({ restaurantId: req.params.id }).sort({ createdAt: "asc" }).lean(); // Get each of the menuitems tied to that specific restaurant
      res.render("restaurant.ejs", { restaurant: restaurant, user: req.user, restaurantComments: restaurantComments, menuitems: menuitems }); // Pass everything to the restaurant view
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
      await Restaurant.deleteOne({ _id: req.params.id }); // Delete the restaurant
      await RestaurantComment.deleteMany({ restaurantId: req.params.id }); // Delete all of the comments tied to that restaurant
      await Menuitem.deleteMany({ restaurantId: req.params.id }); // Delete all of the menuitems tied to that restaurant
      console.log("Deleted Restaurant");
      res.redirect("/feed");
    } catch (err) {
      res.redirect("/feed");
    }
  },
};