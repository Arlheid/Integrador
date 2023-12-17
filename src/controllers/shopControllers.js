const express = require('express');
const router = express.Router();


const shopControllers = {
get_shop: (req,res) => res.send('Route for shop view'),
get_item:(req,res) => res.send(`Route para buscar y devolver un producto desde un ID ${req.params.id}`),
post_item:(req,res) => res.send('Route para añadir el item actual al carrito'),

get_cart:(req,res) => res.send('Route for cart view'),
post_cart:(req,res) => res.send('Route for go to cheackout page'),

}

module.exports= shopControllers;