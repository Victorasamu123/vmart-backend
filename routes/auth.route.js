const express = require("express");
const auth = express.Router();
const { signup, signin, dashboard, getuserDetails } = require("../controllers/auth.controller");
auth.post("/signup",signup);
auth.post("/signin",signin);
auth.post("/dashboard",dashboard);
auth.post("/users",getuserDetails)
module.exports=auth;