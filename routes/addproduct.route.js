const express= require("express");
const { addphones } = require("../controllers/addproduct.controllers");
const { getphones } = require("../controllers/getProduct.controller");
const addproduct=express.Router();

addproduct.post("/addphones",addphones);
addproduct.get("/getphones",getphones);

module.exports=addproduct;