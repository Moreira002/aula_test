
 //import do arquivo do aluno.js
 const aluno = require('../model/aluno.js');

//Inserir novo Aluno
 const inserirAluno = async function (dadosAluno) {
   

    let result = await aluno.insertAluno(dadosAluno);

    if(result)
        return true;
    else
        return false;
}

//Retorna todos os alunos 
const listarAlunos = async function () {
    //Chama a função para buscar no BD
    let dados = await aluno.selectAllAlunos();

    if(dados)
        return dados;
    else
        return false;
}

//Buscar Aluno por Id
const buscarIdAlunos = async function (id_aluno) {
    //Chama a função para buscar no BD
    let dados = await aluno.selectbyIdAlunos(id_aluno);

    if(dados)
        return dados;
    else
        return false;
}

//atualiza o aluno
const atualizarAluno = async function (dadosAluno, id_aluno) {
    
    //Recebe o ID
    let idaluno = id_aluno;
    
    //adiciona o id do aluno unto com os dados do JSON
    dadosAluno.id_aluno = idaluno;

    //chama a função para atualizar os dados do aluno
    let result = await aluno.updateAlunos(dadosAluno);

    if(result)
        return true;
    else
        return false;
}


//excluir o Aluno
const excluirAlunos = async function (id_aluno) {
    //Chama a função para buscar no BD
    let result = await aluno.apagarAlunos(id_aluno);

    if(result)
        return true;
    else
        return false;
}

module.exports = {
    inserirAluno,
    listarAlunos,
    buscarIdAlunos,
    atualizarAluno,
    excluirAlunos
};

