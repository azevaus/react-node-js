const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const api = require('./backend/routes'); //rota para backend e variavel api
const app = express(); //variavel app
app.use(bodyParser.json());
//rota para back-end /api
app.use('/api', api);
if(process.env.NODE_ENV === 'production'){
    //express vai entregar os assets de produção
    //Como por exemplo: main.js ou o main.css
    app.use(express.static('frontend/build'));

    //Express vai entregar o index.html se não reconhecer a rota
    const path = require('path');
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname,'frontend', 'build', 'index.html'));
    })
}
const PORT = process.env.PORT; // porta para o servidor de hospedagem
app.listen(PORT);