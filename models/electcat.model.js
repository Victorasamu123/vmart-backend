const mongoose= require("mongoose");

const electCatSchema=mongoose.Schema({
    productimage:{required:true,type:String},
    productname:{required:true,type:String},
    productcategory:{required:true,type:String},
    productdescription:{required:true,type:String},
    productprice:{required:true,type:String},
    productdiscount:{required:true,type:String}
});

const electCatModel= mongoose.model("electcat_collections",electCatSchema);

module.exports=electCatModel;