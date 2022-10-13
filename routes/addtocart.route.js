const express = require("express");
const cart=express.Router()
const { addtocart, getcartpage } = require("../controllers/addtocart.controller");

cart.post("/addtocart",addtocart);
cart.post("/getcart",getcartpage);

module.exports=cart;