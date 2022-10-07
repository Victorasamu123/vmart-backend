const express= require("express");
const { addphones } = require("../controllers/addproduct.controllers");
const addproduct=express.Router();

addproduct.post("/addphones",addphones);

module.exports=addproduct;