const phoneCatModel = require("../models/phonecat.model");
const cloudinary = require("cloudinary")
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
    secure:true
  });
const addphones=(req,res)=>{
    console.log(req.body);
    const myPhoneFile=req.body.productimage

}