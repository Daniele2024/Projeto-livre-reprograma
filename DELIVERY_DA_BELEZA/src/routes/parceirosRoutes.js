const express = require("express")
const router = express.Router()
const controller = require("../controllers/parceirosController")


//rota para visualizar toda lista de cadastro 
router.get("/listarTodos", controller.listarTodosParceiros)

//rota para visão cliente com dados do profissional e seus serviços
router.get("/filtrar", controller.filtrarParceiros)

//rota para cadastro do profissional
router.post("/criar",controller.cadastrarParceiros)

//rota para cadastro de login
router.post("/login" ,controller.login )

//rota para atualizaçao do cadastro
router.put("/atualizar/:id", controller.atualizarParceiros)

//rota para exclusão do cadastro
router.delete("/deletar/:id",controller.deletarParceiroPorId)

module.exports = router;