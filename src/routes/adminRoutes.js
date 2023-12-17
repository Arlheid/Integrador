const express = require('express');
const router = express.Router();

const adminControllers = require('../controllers/adminControllers');

router.get('/',adminControllers.admin);
router.get('/create',adminControllers.get_create),
router.post('/create',adminControllers.post_create),
router.get('/edit/:id',adminControllers.get_edit),
router.put('/edit/:id',adminControllers.post_edit),
router.delete('/delete/:id',adminControllers.delete),

module.exports = router;

// Admin Routes:
// - GET -> /admin
// - GET -> /admin/create
// - POST -> /admin/create
// - GET -> /admin/edit/:id
// - PUT -> /admin/edit/:id
// - DELETE -> /admin/delete/:id