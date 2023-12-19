const express = require("express");
const router = express.Router();

const controller = require("../controllers/mainController");

router.get("/", controller.index);
router.get('/contact', controller.contact);
router.get('/about', controller.about);
router.get('/faq', controller.faq);

module.exports = router;
