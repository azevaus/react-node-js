const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const api = require('./backend/routes'); //rota para backend e variavel api
const app = express(); //variavel app
app.use(bodyParser.json());
app.get('/', (req, res) => { // rota principal
    res.json({ // retornando os dados no formato json
        'success': true
    });
});
//rota para back-end /api
app.use('/api', api);
const PORT = process.env.PORT; // porta para o servidor de hospedagem
app.listen(PORT);