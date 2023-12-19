const express = require("express");
const router = express.Router();

const shopcontroller = require("../controllers/shopController");

// CRUD
// Create, Read, Update, Delete

router.get("/", shopcontroller.index);
router.get("/:id", shopcontroller.show);
router.post("/", shopcontroller.store);
router.put("/:id", shopcontroller.update);
router.delete("/:id", shopcontroller.destroy);
router.get('/:page', shopcontroller.show)

module.exports = router;



// Shop Routes:
// - GET -> /shop
// - GET -> /shop/item/:id
// - POST -> /shop/item/:id/add
// - GET -> /shop/cart
// - POST -> /shop/cart