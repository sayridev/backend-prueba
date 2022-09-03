const {Schema,model}=require('mongoose');
const CategorySchema=Schema({
    name:String,

})
module.exports=model('category',CategorySchema)