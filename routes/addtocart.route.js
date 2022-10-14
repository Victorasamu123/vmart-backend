const express = require("express");
const cart=express.Router()
const { addtocart, getcartpage, saveItem } = require("../controllers/addtocart.controller");

cart.post("/addtocart",addtocart);
cart.post("/getcart",getcartpage);
cart.post("/saveitem",saveItem);
module.exports=cart;