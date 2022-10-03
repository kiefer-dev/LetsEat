const express = require("express");
const router = express.Router();
const menuitemsController = require("../controllers/menuitems");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment Routes - only need a post and delete
router.post("/createMenuitem/:id", menuitemsController.createMenuitem);
router.delete("/deleteMenuitem/:restaurantId/:menuitemId", menuitemsController.deleteComment);

module.exports = router;