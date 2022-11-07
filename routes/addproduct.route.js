const express= require("express");
const { addphones, addcomp, addelect, addgame } = require("../controllers/addproduct.controllers");
const { getphones, productdetails, getcomps,getelects, getgames } = require("../controllers/getProduct.controller");
const addproduct=express.Router();

addproduct.post("/addphones",addphones);
addproduct.post("/addcomps",addcomp);
addproduct.get("/getphones",getphones);
addproduct.post("/productdetails",productdetails);
addproduct.get("/getcomps",getcomps);
addproduct.post("/addelects",addelect);
addproduct.post("/addgames",addgame);
addproduct.get("/getelects",getelects);
addproduct.get("/getgames",getgames);
addproduct.get("/getgamess",getgames);
module.exports=addproduct;