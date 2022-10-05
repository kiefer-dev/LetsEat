const Menuitem = require("../models/Menuitem");
const Restaurant = require("../models/Restaurant");

module.exports = {
    getMenuitem: async (req, res) => {
        try {
            const menuitem = await Menuitem.findById(req.params.id);
            const restaurant = await Restaurant.find({ restaurantId: menuitem.restaurantId });
            // const menuitemComments = await MenuitemComment.find({ menuitemId: req.params.id }).sort({ createdAt: "desc" }).lean();
            res.render("menuitem.ejs", { menuitem: menuitem, user: req.user, restaurant: restaurant });
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
