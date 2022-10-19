const addToCartModel = require("../models/addToCart.model");
const saveItemModel = require("../models/saveItem.model");
const transactionsmodel = require("../models/Transactions.models");

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
                        res.send({message:"item added successfully to cart",status:true});
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
                res.send({message:"item already exists in save items",status:false});
            }else{
                let newcart = new saveItemModel(req.body);
                newcart.save((err)=>{
                    if(err){
                        console.log(err)
                        res.send({message:"an error occured",status:false});
                    }else{
                        console.log("lolp")
                        res.send({message:"item save successfully",status:true});
                    }
                })
            }
        }
    })
    addToCartModel.findOneAndDelete({productimage:req.body.productimage,productname:req.body.productname,productprice:req.body.productprice},(err,result)=>{
        if(err){
           console.log(err)
        }else{
            // res.send({message:"delete",status:true});
        }
    })
}
const removeitem=(req,res)=>{
    console.log(req.body)
    addToCartModel.findOneAndDelete({productimage:req.body.productimage,productname:req.body.productname,productprice:req.body.productprice},(err,result)=>{
        if(err){
           console.log(err)
        }else{
            res.send({message:"delete",status:true});
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
const getsaveitem=(req,res)=>{
    console.log(req.body)
    saveItemModel.find({userId:req.body.userId},(err,result)=>{
        if(err){
            res.send({message:"an error occured",status:false})
        }else{
            res.send({message:"result",status:true,saveitemresult:result})
        }
    })
}
const addtocart2=(req,res)=>{
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
                        res.send({message:"item added successfully to cart",status:true});
                    }
                })
            }
        }
    })
    saveItemModel.findOneAndDelete({productimage:req.body.productimage,productname:req.body.productname,productprice:req.body.productprice},(err,result)=>{
        if(err){
           console.log(err)
        }else{
            // res.send({message:"delete",status:true});
        }
    })
}
const transactions=(req,res)=>{
   console.log(req.body)
   let newTransaction= new transactionsmodel(req.body);
   newTransaction.save((err)=>{
    if(err){
        console.log(err)
        res.send({message:"an error occured",status:false});
    }else{
        res.send({message:"transaction successful",status:true});
        addToCartModel.findOneAndDelete({productname:req.body.productname2},(err,result)=>{
            if(err){
               console.log(err)
            }else{
                // res.send({message:"delete",status:true});
            }
        })
    }
   })
}
const getTransactions=(req,res)=>{
    console.log(req.body)
    transactionsmodel.find({userId:req.body.userId},(err,result)=>{
        if(err){
            res.send({message:"an error occurred",status:false})
        }else{
            res.send({message:"result",status:true,resulttrans:result})
        }
    })
}
module.exports={addtocart,getcartpage,saveItem,getsaveitem,removeitem,addtocart2,transactions,getTransactions}