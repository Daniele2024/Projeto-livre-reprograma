const express = require("express")
const router = express.Router()
const controller = require("../controllers/parceirosController")

router.get("/all", controller.getAll )
router.post("/criar",controller.cadastrar)
router.put("/atualizar/:id", controller.atualizar)
router.delete("/delete/:id",controller.deleteParceiroId )


module.exports = router;