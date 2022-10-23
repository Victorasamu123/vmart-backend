const express = require("express");
const auth = express.Router();
const { signup, signin, dashboard, getuserDetails,tokenverify } = require("../controllers/auth.controller");
auth.post("/signup",signup);
auth.post("/signin",signin);
auth.post("/dashboard",dashboard);
auth.post("/users",getuserDetails);
auth.get("/verifytoken",tokenverify)
module.exports=auth;