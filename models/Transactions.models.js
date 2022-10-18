const mongoose=require("mongoose");

const transactionsSchema=mongoose.Schema({
    firstname:{required:true,type:String},
    lastname:{required:true,type:String},
    amount:{required:true,type:String},
    email:{required:true,type:String},
    userId:{required:true,type:String}
});
const transactionsmodel=mongoose.model("transactions_history",transactionsSchema)

module.exports=transactionsmodel;