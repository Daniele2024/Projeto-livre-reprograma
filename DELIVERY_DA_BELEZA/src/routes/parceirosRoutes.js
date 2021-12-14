const express = require("express")
const router = express.Router()
const controller = require("../controllers/parceirosController")

router.get("/listarTodos", controller.listarTodosParceiros)
router.get("/filtrar", controller.filtrarParceiros)
router.post("/criar",controller.cadastrarParceiros)
router.put("/atualizar/:id", controller.atualizarParceiros)
router.delete("/deletar/:id",controller.deletarParceiroPorId)

module.exports = router;