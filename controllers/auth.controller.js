const authModel = require("../models/auth.model");
const jwt = require("jsonwebtoken");
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
                     res.send({message:"signup not succesful",status:false});
                    }else{
                     console.log("success");
                     res.send({message:"signup successful",status:true});
                    }
                })
            }
        }
    })
}
const signin=(req,res)=>{
    console.log(req.body);
    let {password,email} = req.body
    authModel.findOne({email:req.body.email},(err,user)=>{
        if(err){
            res.send({message:"signin not successfull",status:false})
        }else{
            if(user){
                user.validatePassword(password,(err,same)=>{
                    if(err){
                        res.send({message:"Server Error",status:false})
                    }else{
                        if(same){
                            let token =jwt.sign({email},"secret",{expiresIn:"2h"})
                            console.log(token)
                            res.send({message:"User Signed in Successfully",status:true,token,userId:user._id,userStatus:user.status,email:user.email})
                        }else{
                            res.send({message:"Wrong Password",status:false})
                        }
                    }
                })
                // res.send({message:"Email Exists",status:true})
            }else{
                res.send({message:"invalid Email",status:false})
            }
        }
    })
}

const dashboard=(req,res)=>{
    console.log(req.body);
    authModel.findOne({_id:req.body.user_id},(err,result)=>{
        if(err){
            res.send({message:"internal server error",status:false});
        }else{
            res.send({message:"result are here already",status:true,result:result})
        }
    })
}
const getuserDetails=(req,res)=>{
    console.log(req.body);
    authModel.findOne({_id:req.body.userId},(err,result)=>{
        if(err){
            res.send({message:"internal server error",status:false});
        }else{
            res.send({message:"result are here already",status:true,result:result})
        }
    })
}
const tokenverify=(req,res)=>{
    let token = req.headers.authorization.split(" ")[1]
    jwt.verify(token,"secret",(err,result)=>{
        if(err){
            console.log(err)
            res.send({message:"Error occured",status:false})
        }else{
            let email = result.email
            res.send({message:"Congratulations",status:true})
        }
    })
}
module.exports={signup,signin,dashboard,getuserDetails,tokenverify};