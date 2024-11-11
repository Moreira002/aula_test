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

//função para atribuir permissões de acesso na API
app.use((request, response, next) =>{
    response.header('Access-Control-Allow-Origins','*');
    response.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');

    app.use(cors());

    next();
});

//define que o formato de dados que chegará no POST será do tipo JSON
const bodyParserJSON = bodyParser.json();

//import da controller do aluno
const controllerAluno = require('./controller/controllerAluno.js');

//MVC (model/controller/view)

//EndPoint inserir aluno:
app.post('/aluno', cors(), bodyParserJSON, async function(request, response) {
    let dados = request.body;

     //encaminha os dados para a controller
    let result = await controllerAluno.inserirAluno(dados)
    
    if(result){
        response.status(201);
        response.json();
    }else{
        response.status(400);
        response.json();
    }

});

//EndPoint listar alunos:
app.get('/aluno', cors(), async function(request, response) {
    let dadosAluno = await controllerAluno.listarAlunos();

    if(dadosAluno){
        response.status(200);
        response.json(dadosAluno);
    }else{
        response.status(404);
        response.json({menssage: 'Não foram encontrados registros no Banco de dados'});
    }
})


//EndPoint buscar aluno pelo id:
app.get('/aluno/:id_aluno', cors(), async function(request, response) {
    let idAluno = request.params.id_aluno;
    let dadosAluno = await controllerAluno.buscarIdAlunos(idAluno);

    if(dadosAluno){
        response.status(200);
        response.json(dadosAluno);
    }else{
        response.status(404);
        response.json({menssage: 'O id não foi encontrado  no Banco de dados'});
    }

})

//EndPoint alterar aluno:
app.put('/aluno/:id_aluno',cors(), bodyParserJSON, async function (request,response) {

    let id_aluno = request.params.id_aluno;
    let dados = request.body;

    let result = controllerAluno.atualizarAluno(dados, id_aluno);

    if(result){
        response.status(200)
        response.json();

    }else{
        response.status(400)
        response.json({menssage: 'O Aluno não foi alterado corretamente! Por favor verifique.'});
    }

})
    



//EndPoint excluir aluno:
app.delete('/aluno/:id_aluno', cors(), async function (request,response) {
    let idaluno = request.params.id_aluno;

    let result = controllerAluno.excluirAlunos(idaluno);

    if (result) {
        response.status(200);
        response.json();
    }else{
        response.status(400);
        response.json({menssage:'Não foi possivel apagar o Registro do Banco de Dados'})
    }
 
});





app.listen(8080, function() {
    console.log('Servidor aguardando requisiçoes na porta 8080')
    
});