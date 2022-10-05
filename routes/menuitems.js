const express = require("express");
const router = express.Router();
const menuitemsController = require("../controllers/menuitems");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Routes
router.get("/:id", ensureAuth, menuitemsController.getMenuitem);
router.post("/createMenuitem/:id", menuitemsController.createMenuitem);
router.delete("/deleteMenuitem/:restaurantId/:menuitemId", menuitemsController.deleteMenuitem);

module.exports = router;