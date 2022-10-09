const express= require("express");
const { addphones, addcomp } = require("../controllers/addproduct.controllers");
const { getphones, productdetails, getcomps } = require("../controllers/getProduct.controller");
const addproduct=express.Router();

addproduct.post("/addphones",addphones);
addproduct.post("/addcomps",addcomp);
addproduct.get("/getphones",getphones);
addproduct.post("/productdetails",productdetails);
addproduct.get("/getcomps",getcomps)
module.exports=addproduct;