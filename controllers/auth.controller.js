const authModel = require("../models/auth.model");

const signup=(req,res)=>{
    console.log(req.body);
    authModel.findOne({email:req.body.email},(err,result)=>{
        if(err){
            console.log(err);
            res.send({message:"internal server error",status:false});
        }else{
            if(result){
                console.log(result,"hgfdfg")
                res.send({message:"email has already been used",status:false});
            }else{
                let form = authModel(req.body);
                form.save((err)=>{
                    if(err){
                     console.log(err)
                     res.send({message:"signup not succesful",     status:false});
                    }else{
                     console.log("success")
                     res.send({message:"signup successful",status:true});
                    }
                })
            }
        }
    })
}
const signin=(req,res)=>{
    console.log(req.body);
     res.send({message:"in process though"});
}

module.exports={signup,signin};