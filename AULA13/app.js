/**********************************************************************
 * Objetivo: Criar a primeira API utilizando o metodo GET
 * Data: 23/10/2024 
 * Aluno: Igor  Moreira Lopes
 * Versao:1.0
 **********************************************************************/

//import das dependencias a serem utilizadas no projeto
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//instanciando o objeto do express 
const app = express();

//Request - requisiçoes(solicitaçoes que vao chegar para a API)
//Response  - respostas que a api irá realizar tendo como base as requisiçao
app.use((request, response, next) =>{
    response.header('Access-Control-Allow-Origin','*');
    response.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');

    app.use(cors());
    
    next();
});

//EndPoint 

app.get('/fecaf/livros', cors(), async function (request,response) {
    let livros = {livrros : 
                      [
                       {id: 1, nome : 'aprendendo Node.JS'},
                       {id: 2, nome : 'aprendendo pyton'},
                       {id: 3, nome : 'aprendendo json'},
                       {id: 4, nome : 'aprendendo javaScript'},
                       {id: 5, nome : 'aprendendo MySQL'},
                      ],
                };
    response.status(200);
    response.json(livros);
    
    
});

app.listen(8080, function() {
    console.log('Servidor aguardando requisiçoes na porta 8080')
    
} )