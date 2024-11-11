/**********************************************************************
 * Objetivo: Criar a primeira API utilizando o metodo GET
 * Data: 23/10/2024 
 * Aluno: Igor  Moreira Lopes
 * Versao:1.0
 **********************************************************************/

// Importando as dependências necessárias
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Instanciando o objeto do express 
const app = express();

// Configurando CORS
app.use(cors());
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Endpoint para listar livros
app.get('/fecaf/livros', async function (request, response) {
    let livros = {
        livros: [
            { id: 1, nome: 'aprendendo Node.JS' },
            { id: 2, nome: 'aprendendo Python' },
            { id: 3, nome: 'aprendendo JSON' },
            { id: 4, nome: 'aprendendo JavaScript' },
            { id: 5, nome: 'aprendendo MySQL' },
        ],
    };
    response.status(200).json(livros);
});

// Iniciando o servidor na porta 8080
app.listen(8080, function() {
    console.log('Servidor aguardando requisições na porta 8080');
});