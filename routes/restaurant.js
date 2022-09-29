const express = require("express");
const router = express.Router();
const restaurantsController = require("../controllers/restaurants");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Routes - simplified for now
router.get("/:id", ensureAuth, restaurantsController.getRestaurant);
router.post("/createRestaurant", restaurantsController.createRestaurant);
// router.put("/likePost/:id", restaurantsController.likeRestaurant);
router.delete("/deleteRestaurant/:id", restaurantsController.deleteRestaurant);

module.exports = router;