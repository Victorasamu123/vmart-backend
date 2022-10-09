const phoneCatModel = require("../models/phonecat.model");
const compCatModel = require("../models/compcat.model");
const cloudinary = require("cloudinary");
const electCatModel = require("../models/electcat.model");
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
const addcomp=(req,res)=>{
    console.log(req.body);
    const mycompFile=req.body.productimage
    
    cloudinary.v2.uploader.upload(mycompFile,(err,result)=>{
        if(err){
            console.log("File did not upload")
            res.send({message:"upload failed",status:false})
    
        }else{
            console.log(result.secure_url);
            const myImage= result.secure_url
            let newPhoneProduct = new compCatModel({...req.body,productimage:myImage});
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
const addelect=(req,res)=>{
    console.log(req.body);
    const mycompFile=req.body.productimage
    
    cloudinary.v2.uploader.upload(mycompFile,(err,result)=>{
        if(err){
            console.log("File did not upload")
            res.send({message:"upload failed",status:false})
        }else{
            console.log(result.secure_url);
            const myImage= result.secure_url
            let newPhoneProduct = new electCatModel({...req.body,productimage:myImage});
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
module.exports={addphones,addcomp,addelect}