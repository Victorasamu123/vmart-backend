const express = require("express");
const app = express();
// const cors = cors();
require("dotenv").config();
const PORT = process.env.PORT


app.listen(PORT,()=>{
    console.log(`app listening at port :${PORT}`);
})
