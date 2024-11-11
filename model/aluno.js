
//Import da biblioteca do prisma client
var {PrismaClient} = require('@prisma/client');

//instancia do objeto prismaClient()
var prisma = new PrismaClient();

//insere um novo aluno no banco de dados.
const insertAluno = async function (dadosAluno) {
    
    let sql = `insert into tbl_aluno (
                    nome,
                    celular,
                    email,
                    cpf
                    )VALUES(
                    '${dadosAluno.nome}',
                    '${dadosAluno.celular}',
                    '${dadosAluno.email}',
                    '${dadosAluno.cpf}'
                    )`
    
    let result = await prisma.$executeRawUnsafe(sql);
    
    if(result)
        return true;
    else 
        return false;
}

//Retorna todos os alunos
const selectAllAlunos = async function () {
    
    //Script SQL
    let sql = `select*from tbl_aluno`;

    //executa no BD o SQL
    let rsAluno = await prisma.$queryRawUnsafe(sql);

    if(rsAluno.length > 0)
        return rsAluno;
    else 
        return false;


   
}

//busca alunos pelo ID
const selectbyIdAlunos = async function (id_aluno) {
    
    //Script SQL
    let sql = `select*from tbl_aluno where id_aluno = ${id_aluno}`;

    //executa no BD o SQL
    let rsAluno = await prisma.$queryRawUnsafe(sql);

    if(rsAluno.length > 0)
        return rsAluno;
    else 
        return false;
}

//Update Aluno no BD
const updateAlunos = async function (dadosAluno) {
    
    //Script SQL
    let sql = `UPDATE tbl_aluno SET
                    nome = '${dadosAluno.nome}',
                    celular = '${dadosAluno.celular}',
                    email = '${dadosAluno.email}',
                    cpf = '${dadosAluno.cpf}'
                WHERE id_aluno = ${dadosAluno.id_aluno}
                    `;

    //executa 0 script SQL no BD 
    let result = await prisma.$executeRawUnsafe(sql);

    if(result)
        return result;
    else 
        return false;
}

//Deletar Aluno no BD
const apagarAlunos = async function (id_aluno) {
    
    //Script SQL
    let sql = `DELETE from tbl_aluno 
                WHERE id_aluno = ${id_aluno}
                    `;

    //executa 0 script SQL no BD 
    let result = await prisma.$executeRawUnsafe(sql);

    if(result)
        return result;
    else 
        return false;
}


module.exports = {
    insertAluno,
    selectAllAlunos,
    selectbyIdAlunos,
    updateAlunos,
    apagarAlunos
};