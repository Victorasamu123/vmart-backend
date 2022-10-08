const phoneCatModel = require("../models/phonecat.model");

const getphones=(req,res)=>{
    phoneCatModel.find((err,result)=>{
        if(err){
            res.send({message:"internal server error"});
        }else{
            console.log(result)
            res.send({phonearray:result});
        }
    })
}
module.exports={getphones};