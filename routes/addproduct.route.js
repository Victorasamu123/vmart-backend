const express= require("express");
const { addphones, addcomp, addelect } = require("../controllers/addproduct.controllers");
const { getphones, productdetails, getcomps,getelects } = require("../controllers/getProduct.controller");
const addproduct=express.Router();

addproduct.post("/addphones",addphones);
addproduct.post("/addcomps",addcomp);
addproduct.get("/getphones",getphones);
addproduct.post("/productdetails",productdetails);
addproduct.get("/getcomps",getcomps);
addproduct.post("/addelects",addelect);
addproduct.get("/getelects",getelects);
module.exports=addproduct;