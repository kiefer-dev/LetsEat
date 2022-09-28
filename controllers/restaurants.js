const Restaurant = require("../models/Restaurant");

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
      const restaurants = await Restaurant.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", { restaurants: restaurants });
    } catch (err) {
      console.log(err);
    }
  },
  getRestaurant: async (req, res) => {
    try {
      const restaurant = await Restaurant.findById(req.params.id);
      res.render("restaurant.ejs", { restaurant: restaurant, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createRestaurant: async (req, res) => {
    try {
      await Restaurant.create({
        restaurantName: req.body.restaurantName,
        menuUrl: req.body.menuUrl,
        tag: req.body.tag,
        addedBy: req.user.id,
      });
      console.log("Restaurant has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  // likeRestaurant: async (req, res) => {
  //   try {
  //     await Restaurant.findOneAndUpdate(
  //       { _id: req.params.id },
  //       {
  //         $inc: { likes: 1 },
  //       }
  //     );
  //     console.log("Likes +1");
  //     res.redirect(`/restaurant/${req.params.id}`);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  deleteRestaurant: async (req, res) => {
    try {
      // Find by id
      let restaurant = await Restaurant.findById({ _id: req.params.id });
      // Delete from db
      await Restaurant.remove({ _id: req.params.id });
      console.log("Deleted Restaurant");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};