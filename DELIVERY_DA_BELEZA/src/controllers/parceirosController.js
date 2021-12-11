//importando
const parceiros = require("../models/parceirosModels")
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const getAll = async(req, res) => {

  try{
    const parceiro = await parceiros.find()
    
    res.status(200).json({messagem:"Lista de profissionais", parceiro})
   
}   catch (error){
    res.status(500).json({
        message: error.message
    })
}
};


module.exports=
{getAll
}