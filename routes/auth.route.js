const express = require("express");
const auth = express.Router();
const { signup, signin, dashboard } = require("../controllers/auth.controller");
auth.post("/signup",signup);
auth.post("/signin",signin);
auth.post("/dashboard",dashboard);
module.exports=auth;