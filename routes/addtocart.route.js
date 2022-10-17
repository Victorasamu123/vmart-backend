const express = require("express");
const cart=express.Router()
const { addtocart, getcartpage, saveItem, getsaveitem, removeitem, addtocart2 } = require("../controllers/addtocart.controller");

cart.post("/addtocart",addtocart);
cart.post("/getcart",getcartpage);
cart.post("/saveitem",saveItem);
cart.post("/getsaveitem",getsaveitem);
cart.post("/removeitem",removeitem);
cart.post("/addtocart2",addtocart2)
module.exports=cart;