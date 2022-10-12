const express = require("express");
const cart=express.Router()

cart.post("/addtocart");

module.exports=cart;