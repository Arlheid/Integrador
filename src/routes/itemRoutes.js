const express = require("express");
const router = express.Router();

const controller = require("../controllers/itemController");

// CRUD
// Create, Read, Update, Delete

router.get("/", controller.item);
router.get("/:id", controller.show);
router.post("/", controller.store);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;
