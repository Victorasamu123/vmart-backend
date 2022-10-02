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
app.listen(PORT,()=>{
    console.log(`app listening at port :${PORT}`);
})
