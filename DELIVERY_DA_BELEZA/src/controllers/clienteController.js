
const clientes = require("../models/parceirosModels")




const getAll = async (req, res)=>{
    
    const {nome, profisão, serviço, valorServiço,telefone } = req.query
    
    try{
    const filtrados = await clientes.find().select('-password' )
    

    
  return res.status(200).send(filtrados);
}

catch (error){
    res.status(500).json({
        message: error.message
    })
}}
module.exports={
    getAll
}