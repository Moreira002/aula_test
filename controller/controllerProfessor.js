//import do arquivo do aluno.js
const professor = require('./AULA13\model\Professor.js');

//Inserir novo Professor
 const inserirProfessor = async function (dadosprofessor) {
   

    let result = await professor.insertAluno(dadosprofessor);

    if(result)
        return true;
    else
        return false;
}

//Retorna todos os alunos 
const listarProfessor = async function () {
    //Chama a função para buscar no BD
    let dados = await professor.selectAllProfessores();

    if(dados)
        return dados;
    else
        return false;
}

//Buscar Aluno por Id
const buscarIdProfessor = async function (id_professor) {
    //Chama a função para buscar no BD
    let dados = await professor.selectbyIdprofessor(id_professor);

    if(dados)
        return dados;
    else
        return false;
}

//atualiza o aluno
const atualizarProfessor = async function (dadosprofessor, id_professor) {
    
    //Recebe o ID
    let idprofessor = id_professor;
    
    //adiciona o id do aluno unto com os dados do JSON
    dadosprofessor.id_professor = idprofessor;

    //chama a função para atualizar os dados do aluno
    let result = await professor.updateAlunos(dadosAluno);

    if(result)
        return true;
    else
        return false;
}


//excluir o Aluno
const excluirProfessor = async function (id_professor) {
    //Chama a função para buscar no BD
    let result = await professor.apagarProfessor(id_professor);

    if(result)
        return true;
    else
        return false;
}

module.exports = {
    inserirProfessor,
    listarProfessor,
    buscarIdProfessor,
    atualizarProfessor,
    excluirProfessor
};

