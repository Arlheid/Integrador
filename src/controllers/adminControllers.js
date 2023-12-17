const express = require('express');
const router = express.Router();

const adminControllers = {
admin:(req,res) => res.send('Route for shop view'),
get_create:(req,res) => res.send('Route para bus,r y devolver un producto desde un ID'),
post_create:(req,res) => res.send('Route para añadir el item actual sl carrito'),
get_edit:(req,res) => res.send('Route for cart view'),
post_edit:(req,res) => res.send('Route for go to cheackout page'),
delete:(req,res) => res.send('Route for go to cheackout page'),
}

module.exports= adminControllers;