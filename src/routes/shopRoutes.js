const express = require('express');
const shopControllers = require('../controllers/shopControllers');
const router = express.Router();

// en el app del router tiene /shop

router.get('/',shopControllers.get_shop);
router.get('/item/:id',shopControllers.get_item);
router.post('/item/:id/add',shopControllers.post_item);

router.get('/cart',shopControllers.get_cart);
router.post('/cart',shopControllers.post_cart);

module.exports = router;

// - GET -> /shop
// - GET -> /shop/item/:id
// - POST -> /shop/item/:id/add
// - GET -> /shop/cart
// - POST -> /shop/cart