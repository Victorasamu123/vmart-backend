const express = require("express");
const cart=express.Router()
const { addtocart } = require("../controllers/addtocart.controller");

cart.post("/addtocart",addtocart);

module.exports=cart;