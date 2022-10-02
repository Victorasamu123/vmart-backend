const express = require("express");
const auth = express.Router();
const { signup } = require("../controllers/auth.controller");
auth.post("/signup",signup);
module.exports=auth;