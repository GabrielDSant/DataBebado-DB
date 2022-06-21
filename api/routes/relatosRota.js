const express = require('express');
const router = express.Router();

const relatosController = require('../controllers/relatosController')

// Rota que utiliza o metodo GET e usa o metodo getAll exportada pelo controller que usa a tabela renderizada
// pelo model para executar o metodo findAll do sequelize (que basicamente faz 'SELECT * FROM ${paramentros da função criada no model}') 
//      A rota aqui no caso chama o controller atraves da constante relatosController

router.get("/", (req, res) => {
    relatosController.getAll(req, res);
});

router.post("/", (req, res) => {
    relatosController.create(req, res);
});

router.put("/:id", (req, res) => {
    relatosController.edit(req, res);
});

router.delete("/:id", (req, res) => {
    relatosController.delete(req, res);
});

module.exports = router;