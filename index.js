const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json())
const URI =process.env.URI
const PORT = process.env.PORT
mongoose.connect(URI,(err)=>{
    if (err) {
        console.log("error connecting with database")
    } else {
        console.log("connecting with database successful");
    }
});
const auth = require("./routes/auth.route");
const addproduct = require("./routes/addproduct.route");
const cart = require("./routes/addtocart.route");
app.use("/auth",auth);
app.use("/addproducts",addproduct);
app.use("/cart",cart);
app.listen(PORT,()=>{
    console.log(`app listening at port :${PORT}`);
})
