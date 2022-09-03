const express=require('express');
const { dbConnection } = require('./database/config');
const cors = require("cors");
require('dotenv').config();

const app =express();
dbConnection();
app.use(cors());
app.use(express.static('public'))
app.use(express.json())
app.use('/api/product',require('./routes/products'));
app.use('/api',require('./routes/category'));


app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
});