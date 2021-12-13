//importando
const parceiros = require("../models/parceirosModels")
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {hashPassword} =require('../helpers/auth')

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

const cadastrar = async (req,res) =>{
    const body = req.body
    
    try{
        const novoCadastro = new parceiros({
            
           aceitoTermoDeUsoDeDados : body.aceitoTermoDeUsoDeDados,
            nome: body.name,
            cpf:body.cpf,
            email: body.email,
            telefone:body.telefone,
            profissão:body.Profissão,
            serviço:body.serviço,
           valorServiço:body.valorServiço,
            password:body.password
        })
        const passwordHashed = await hashPassword(novoCadastro.password,res)
        novoCadastro.password=passwordHashed
        
        const cadastroConcluido = await novoCadastro.save()
        res.status(201).json({
            novoCadastro:cadastroConcluido ,
        })
    
    } catch(error) {
        res.status(400).json({
            mensagem: error.message,
        })
    }
}

const atualizar = async (req, res) => {
    try {
        const parceiroEncontrado = await parceiros.findById(req.params.id)

        if (parceiroEncontrado) {

            parceiroEncontrado.aceitoTermoDeUsoDeDados = req.body.aceitoTermoDeUsoDeDados || parceiroEncontrado.aceitoTermoDeUsoDeDados
            parceiroEncontrado.nome = req.body.nome || parceiroEncontrado.nome
            parceiroEncontrado.cpf = req.body.cpf || parceiroEncontrado.cpf
            parceiroEncontrado.email = req.body.email || parceiroEncontrado.email
            parceiroEncontrado.telefone = req.body.telefone || parceiroEncontrado.telefone
            parceiroEncontrado.Profissão = req.body.Profissão || parceiroEncontrado.Profissão
            parceiroEncontrado.serviço = req.body.serviço || parceiroEncontrado.serviço
            parceiroEncontrado.valorServiço = req.body.valorServiço || parceiroEncontrado.valorServiço
            parceiroEncontrado.password = req.body.password || parceiroEncontrado.password

            const passwordHashed = await hashPassword(parceiroEncontrado.password,res)
            parceiroEncontrado.password=passwordHashed

            const parceiroSalvo = await parceiroEncontrado.save()
            res.status(200).json({
                atualizacao: parceiroSalvo
            })
        }

        res.status(400).json({
            mensagem: " Profissional nao encontrado"
        })
    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}
const deleteParceiroId = async (req, res) => {
    try {
        const parceiroEncontrado = await parceiros.findById(req.params.id)

       await parceiroEncontrado.delete()

       res.status(200).json({
           mensagem: `cadastro de  '${parceiroEncontrado.nome}' deletado com sucesso!`
       })

    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}

module.exports=
{getAll,
    cadastrar,
    atualizar,
    deleteParceiroId
}