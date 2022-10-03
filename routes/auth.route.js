const express = require("express");
const auth = express.Router();
const { signup } = require("../controllers/auth.controller");
auth.post("/signup",signup);
auth.post("/signin",);
module.exports=auth;