const express = require('express');
const router = express.Router();

const authControllers = require('../controllers/authControllers');
// en el app del router tiene /auth

router.get('/login',authControllers.get_login);
router.post('/login',authControllers.post_login);
router.get('/register',authControllers.get_register);
router.post('/register',authControllers.post_register);
router.get('/logout',authControllers.logout);

module.exports = router;
// Auth Routes:
// - GET -> /auth/login
// - POST -> /auth/login
// - GET -> /auth/register
// - POST -> /auth/register
// - GET -> /auth/logout