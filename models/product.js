const {Schema,model}=require('mongoose');
const ProvinceSchema=Schema({
   name:String,
   category:String,
   province:String,
   city:String,
   price:Number,
   isIva:Boolean,
   isPromo:Boolean,
   discount:Number,
   stock:Number,
   status:Boolean

})
module.exports=model('product',ProvinceSchema)