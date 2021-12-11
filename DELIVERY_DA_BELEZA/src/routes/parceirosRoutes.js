const express = require("express")
const router = express.Router()
const controller = require("../controllers/parceirosController")

router.get("/all", controller.getAll )
//router.post("/", controller.postColaboradora)


module.exports = router;