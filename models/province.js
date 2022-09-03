const {Schema,model}=require('mongoose');
const ProvinceSchema=Schema({
    name:String,
    idProv:Number

})
module.exports=model('province',ProvinceSchema)