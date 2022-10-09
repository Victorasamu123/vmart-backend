const mongoose= require("mongoose");

const gameCatSchema=mongoose.Schema({
    productimage:{required:true,type:String},
    productname:{required:true,type:String},
    productcategory:{required:true,type:String},
    productdescription:{required:true,type:String},
    productprice:{required:true,type:String},
    productdiscount:{required:true,type:String}
});

const gameCatModel= mongoose.model("gamecat_collections",gameCatSchema);

module.exports=gameCatModel;