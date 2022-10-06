const Menuitem = require("../models/Menuitem");
const Restaurant = require("../models/Restaurant");

module.exports = {
    getMenuitem: async (req, res) => {
        try {
            const menuitem = await Menuitem.findById(req.params.id); // Get the menuitem that matches the id param
            const restaurant = await Restaurant.find({ restaurantId: menuitem.restaurantId }); // Get the restaurant that the menuitem belongs to
            res.render("menuitem.ejs", { menuitem: menuitem, user: req.user, restaurant: restaurant }); // Render the view and pass along the menuitem, user, and restaurant
        } catch (err) {
            console.log(err);
        }
    },
    createMenuitem: async (req, res) => {
        try {
            await Menuitem.create({
                item: req.body.item,
                itemComment: req.body.itemComment,
                itemRating: req.body.itemRating,
                restaurantId: req.params.id,
                addedBy: req.user.userName,
                addedById: req.user.id,
            });
            console.log("Menuitem has been added!");

            res.redirect(`/restaurants/${req.params.id}`);
        } catch (err) {
            console.log(err);
        }
    },
    deleteMenuitem: async (req, res) => {
        try {
            await Menuitem.deleteOne({ _id: req.params.menuitemId }); // Delete the menuitem that has the id passed up from the view

            res.redirect(`/restaurants/${req.params.restaurantId}`);
        } catch (err) {
            res.redirect("/profile");
        }
    },
};
