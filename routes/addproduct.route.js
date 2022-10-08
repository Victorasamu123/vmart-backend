const express= require("express");
const { addphones } = require("../controllers/addproduct.controllers");
const { getphones, productdetails } = require("../controllers/getProduct.controller");
const addproduct=express.Router();

addproduct.post("/addphones",addphones);
addproduct.get("/getphones",getphones);
addproduct.post("/productdetails",productdetails);
module.exports=addproduct;