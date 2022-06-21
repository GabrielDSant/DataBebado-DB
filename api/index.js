//Este arquivo serve como "base" para o npm

//Chamando dependencias.
const cors = require('CORS')
const express = require('express');
const bodyParser = require('body-parser');

//Criação do App
const app = express();
const port = 8000;
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//Rota relatos
const relatosRota = require('./routes/relatosRota');
app.use("/relatos", relatosRota);


//Mensagem de inicialização
app.listen(port, () => {
    console.log('Servidor express iniciado em http://localhost:8000')
});