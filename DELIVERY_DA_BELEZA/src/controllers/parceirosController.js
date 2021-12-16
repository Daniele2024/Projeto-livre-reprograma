//importando
const Parceiros = require("../models/parceirosModels") // geralmente o nome da variável do models ou schema fica em maiúsculo
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {
    hashPassword
} = require('../middlewares/auth')


const listarTodosParceiros = async (req, res) => {
    try {
        const parceiro = await Parceiros.find()
        res.status(200).json({
            messagem: "Lista de profissionais",
            parceiro
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const filtrarParceiros = async (req, res) => {
    const {
        nome,
        profisão,
        serviço,
        valorServiço,
        telefone
    } = req.query

    try {
        const filtrados = await Parceiros.find().select('-password -cpf -aceitoTermoDeUsoDeDados')

        return res.status(200).send(filtrados);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const cadastrarParceiros = async (req, res) => {
    const body = req.body

    try {
        if (body.aceitoTermoDeUsoDeDados == false) {
            return res.status(401).json({

                message: "Os termos não foram aceitos , cadastro nao autorizado"
            })
        }

        const novoCadastro = new Parceiros({

            aceitoTermoDeUsoDeDados: body.aceitoTermoDeUsoDeDados,
            nome: body.name,
            cpf: body.cpf,
            email: body.email,
            telefone: body.telefone,
            profissão: body.profissão,
            serviço: body.serviço,
            valorServiço: body.valorServiço,
            password: body.password
        })
        const passwordHashed = await hashPassword(novoCadastro.password, res)
        novoCadastro.password = passwordHashed

        const cadastroConcluido = await novoCadastro.save()
        res.status(201).json({
            novoCadastro: cadastroConcluido,
        })

    } catch (error) {
        res.status(400).json({
            mensagem: error.message,
        })
    }
}

const atualizarParceiros = async (req, res) => {
    try {
        const parceiroEncontrado = await Parceiros.findById(req.params.id)

        if (parceiroEncontrado) {

            parceiroEncontrado.aceitoTermoDeUsoDeDados = req.body.aceitoTermoDeUsoDeDados || parceiroEncontrado.aceitoTermoDeUsoDeDados
            parceiroEncontrado.nome = req.body.nome || parceiroEncontrado.nome
            parceiroEncontrado.cpf = req.body.cpf || parceiroEncontrado.cpf
            parceiroEncontrado.email = req.body.email || parceiroEncontrado.email
            parceiroEncontrado.telefone = req.body.telefone || parceiroEncontrado.telefone
            parceiroEncontrado.profissão = req.body.profissão || parceiroEncontrado.profissão
            parceiroEncontrado.serviço = req.body.serviço || parceiroEncontrado.serviço
            parceiroEncontrado.valorServiço = req.body.valorServiço || parceiroEncontrado.valorServiço
            parceiroEncontrado.password = req.body.password || parceiroEncontrado.password

            const passwordHashed = await hashPassword(parceiroEncontrado.password, res)
            parceiroEncontrado.password = passwordHashed

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

const deletarParceiroPorId = async (req, res) => {
    try {
        const parceiroEncontrado = await Parceiros.findById(req.params.id)

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


const login = async(req,res) => {
    const { email, password} = req.body;
  try {
      const user = await User.findOne({ email: email})

  if(!user){
      return res.status(422).send({message: "Email nao encontrado."})

  }
const checkPassword = await bcrypt.compare(password, user.password)

 if (!checkPassword) {
   return  res.status(422).send({ message: "Senha incorreta."})
      }
      const secret = process.env.SECRET;

      const token = jwt.sign({ id: user._id  }, secret)

      res.status(200).json({
          message: "Token deu bom",
          token
      })
   } catch (error){
          res.status(500).json({
              message: error.message
          })
      } };

module.exports = {
    listarTodosParceiros,
    filtrarParceiros,
    cadastrarParceiros,
    atualizarParceiros,
    deletarParceiroPorId,
    login
}