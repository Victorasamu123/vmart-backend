const mongoose= require("mongoose");

const saveItemSchema=mongoose.Schema({
    productimage:{required:true,type:String},
    productname:{required:true,type:String},
    productcategory:{required:true,type:String},
    productdescription:{required:true,type:String},
    productprice:{required:true,type:String},
    productdiscount:{required:true,type:String},
    userId:{required:true,type:String}
});

const saveItemModel= mongoose.model("save_collections",saveItemSchema);

module.exports=saveItemModel;