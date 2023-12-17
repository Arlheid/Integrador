const express = require('express');
const router = express.Router();

const authControllers = {
get_login: (req,res) => res.send('Route for login view'),
post_login:(req,res) => res.send('Route for login view'),
get_register:(req,res) => res.send('Route for register user'),
post_register:(req,res) => res.send('Route for register user'),
logout:(req,res) => res.send('Route for logout'),

}

module.exports= authControllers;