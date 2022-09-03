const express=require('express');
const router=express.Router();
const Product = require('../models/product');


//
 router.post('/',async (req,res)=>{
    const product= Product(req.body)
    await product.save();
        res.json({
           product
        })
})
router.get('/',async (req,res)=>{
    const products= await Product.find()

        res.json({
           products
        })
})
router.put('/',async (req,res)=>{
    const {_id}=req.body
    const product=  await Product.findByIdAndUpdate(_id,req.body);
   
        res.json({
           product
        })
})
router.delete('/',async (req,res)=>{
    const {_id}=req.body
    const product=  await Product.findByIdAndRemove(_id);
  
        res.json({
           product
        })
})

module.exports=router;