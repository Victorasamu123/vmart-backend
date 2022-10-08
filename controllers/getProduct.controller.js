const phoneCatModel = require("../models/phonecat.model");

const getphones=(req,res)=>{
    phoneCatModel.find((err,result)=>{
        if(err){
            res.send({message:"internal server error"});
        }else{
            console.log(result)
            res.send({phonearray:result,message:"result"});
        }
    })
}

const productdetails=(req,res)=>{
    console.log(req.body)
    if(req.body.itemcategory==="phones"){
        phoneCatModel.findById({_id:req.body.item_id},(err,result)=>{
            if(err){
            res.send({message:"internal server error"});
            }else{
                console.log(result)
                res.send({message:"result",product:result})
            }
        })
    }
}
module.exports={getphones,productdetails};