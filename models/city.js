const {Schema,model}=require('mongoose');
const CitySchema=Schema({
    name:String,
    idCity:Number,
    idProv:Number
})
module.exports=model('city',CitySchema)