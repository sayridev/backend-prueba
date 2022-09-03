const express=require('express');
const Category = require('../models/category');
const Province = require('../models/province');
const City = require('../models/city');

const router=express.Router();


//provincia
//ciudad

 router.post('/prov',async(req,res)=>{
    const province=new Province(req.body);
    await province.save();
        res.json({
           province
        })
})

router.post('/city',async(req,res)=>{
    const city=new City(req.body);
await city.save();
    res.json({
       city
    })
})



router.post('/category',async(req,res)=>{
    const category=new Category(req.body);
await category.save();
    res.json({
       category
    })
})



router.get('/prov',async(req,res)=>{
    const province= await Province.find();
    res.json({
        province
    })
})




router.get('/category',async(req,res)=>{
    const category=await Category.find();
    res.json({
       category
    })
})



router.get('/city',async(req,res)=>{
    const city=await City.find();
    res.json({
       city
    })
})

module.exports=router;