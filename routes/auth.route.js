const express = require("express");
const auth = express.Router();
const { signup, signin } = require("../controllers/auth.controller");
auth.post("/signup",signup);
auth.post("/signin",signin);
module.exports=auth;