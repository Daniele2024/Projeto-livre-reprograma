const express = require("express")
const router = express.Router()
const controller = require("../controllers/parceirosController")


//rota para visualizar toda lista de cadastro 
router.get("/listarTodosdados", controller.listarTodosParceiros)

//rota para visão cliente com dados do profissional e seus serviços
router.get("/filtroCliente", controller.filtrarParceiros)


//rota para cadastro do profissional
router.post("/cadastro",controller.cadastrarParceiros)


//rota para atualizaçao do cadastro
router.put("/atualizar/:id", controller.atualizarParceiros)

//rota para exclusão do cadastro
router.delete("/deletar/:id",controller.deletarParceiroPorId)

module.exports = router;