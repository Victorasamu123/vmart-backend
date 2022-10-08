const mongoose = require("mongoose");

const compCatSchema=mongoose.Schema({
    productimage:{required:true,type:String},
    productname:{required:true,type:String},
    productcategory:{required:true,type:String},
    productdescription:{required:true,type:String},
    productprice:{required:true,type:String},
    productdiscount:{required:true,type:String}
});

const compCatModel= mongoose.model("phonecat_collections",compCatSchema);

module.exports=compCatModel;