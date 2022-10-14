const addToCartModel = require("../models/addToCart.model");
const saveItemModel = require("../models/saveItem.model");

const addtocart =(req,res)=>{
    console.log(req.body);
    addToCartModel.findOne({productimage:req.body.productimage,productname:req.body.productname,productprice:req.body.productprice},(err,result)=>{
        if(err){
            res.send({message:"internal server error",status:false});
        }else{
            if(result){
                res.send({message:"item already exists in cart",status:false});
            }else{
                let newcart = new addToCartModel(req.body);
                newcart.save((err)=>{
                    if(err){
                        console.log(err)
                        res.send({message:"an error occured",status:false});
                    }else{
                        console.log("lolp")
                        res.send({message:"item added successfully to cart",status:false});
                    }
                })
            }
        }
    })
}

const saveItem=(req,res)=>{
    console.log(req.body);
    saveItemModel.findOne({productimage:req.body.productimage,productname:req.body.productname,productprice:req.body.productprice},(err,result)=>{
        if(err){
            res.send({message:"internal server error",status:false});
        }else{
            if(result){
                res.send({message:"item already exists in cart",status:false});
            }else{
                let newcart = new saveItemModel(req.body);
                newcart.save((err)=>{
                    if(err){
                        console.log(err)
                        res.send({message:"an error occured",status:false});
                    }else{
                        console.log("lolp")
                        res.send({message:"item save successfully",status:false});
                    }
                })
            }
        }
    })
}
const getcartpage=(req,res)=>{
    console.log(req.body)
    addToCartModel.find({userId:req.body.userId},(err,result)=>{
        if(err){
            res.send({message:"an error occured",status:false})
        }else{
            res.send({message:"result",status:true,cartresult:result})
        }
    })
}
module.exports={addtocart,getcartpage,saveItem}