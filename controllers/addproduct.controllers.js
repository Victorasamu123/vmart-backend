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
    
    cloudinary.v2.uploader.upload(myPhoneFile,(err,result)=>{
        if(err){
            console.log("File did not upload")
            res.send({message:"upload failed",status:false})
    
        }else{
            console.log(result.secure_url);
            const myImage= result.secure_url
            let newPhoneProduct = new phoneCatModel({...req.body,productimage:myImage});
            newPhoneProduct.save((err)=>{
                if(err){
                    console.log(err)
                }else{
                    res.send({message:"product uploaded successfully",status:true})
                }
            })
        }
    })
}

module.exports={addphones}