const mongoose=require('mongoose');

const dbConnection=async()=>{
try {
    console.log(process.env.DB)
  await  mongoose.connect(process.env.DB,{
    })
    console.log("Base de datos conectada")
    
} catch (error) {
    console.log("Error al inicializar la base de datos")
}
}
module.exports={
    dbConnection
}