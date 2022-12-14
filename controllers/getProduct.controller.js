const compCatModel = require("../models/compcat.model");
const electCatModel = require("../models/electcat.model");
const gameCatModel = require("../models/gameCat.model");
const phoneCatModel = require("../models/phonecat.model");

const getphones=(req,res)=>{
    phoneCatModel.find((err,result)=>{
        if(err){
            res.send({message:"internal server error",status:false});
        }else{
            console.log(result)
            res.send({phonearray:result,message:"result",status:true});
        }
    })
}

const getcomps=(req,res)=>{
    compCatModel.find((err,result)=>{
        if(err){
            res.send({message:"internal server error",status:false});
        }else{
            console.log(result)
            res.send({comparray:result,message:"result",status:true});
        }
    })
}
const getelects=(req,res)=>{
    electCatModel.find((err,result)=>{
        if(err){
            res.send({message:"internal server error",status:false});
        }else{
            console.log(result)
            res.send({electarray:result,message:"result",status:true});
        }
    })
}
const getgames=(req,res)=>{
    gameCatModel.find((err,result)=>{
        if(err){
            res.send({message:"internal server error",status:false});
        }else{
            console.log(result)
            res.send({gamearray:result,message:"result",status:true});
        }
    })
}
const productdetails=(req,res)=>{
    console.log(req.body)
    if(req.body.itemcategory==="phones"){
        phoneCatModel.findById({_id:req.body.item_id},(err,result)=>{
            if(err){
            res.send({message:"internal server error",status:false});
            }else{
                console.log(result)
                res.send({message:"result",product:result,status:true})
            }
        })
    }else if(req.body.itemcategory==="computer"){
        compCatModel.findById({_id:req.body.item_id},(err,result)=>{
            if(err){
            res.send({message:"internal server error",status:false});
            }else{
                console.log(result)
                res.send({message:"result",product:result,status:true})
            }
        })
    }else if(req.body.itemcategory==="electronics"){
        electCatModel.findById({_id:req.body.item_id},(err,result)=>{
            if(err){
            res.send({message:"internal server error",status:false});
            }else{
                console.log(result)
                res.send({message:"result",product:result,status:true})
            }
        })
    }else if(req.body.itemcategory==="games"){
        gameCatModel.findById({_id:req.body.item_id},(err,result)=>{
            if(err){
            res.send({message:"internal server error",status:false});
            }else{
                console.log(result)
                res.send({message:"result",product:result,status:true})
            }
        })
    }
}
module.exports={getphones,productdetails,getcomps,getelects,getgames};