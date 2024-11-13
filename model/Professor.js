//Import da biblioteca do prisma client
var {PrismaClient} = require('@prisma/client');

//instancia do objeto prismaClient()
var prisma = new PrismaClient();

//insere um novo professor no banco de dados.
const insertProfessor = async function (dadosprofessor) {
    
    let sql = `insert into tbl_professor (
                    nome,
                    celular,
                    email,
                    cpf,
                    data_nascimento,
                    logradouro,
                    bairro,
                    cidade,
                    estado,
                    cep
                    )VALUES(
                    '${dadosprofessor.nome}',
                    '${dadosprofessor.celular}',
                    '${dadosprofessor.email}',
                    '${dadosprofessor.cpf}',
                    '${dadosprofessor.data_nascimento}',
                    '${dadosprofessor.logradouro}',
                    '${dadosprofessor.bairro}',
                    '${dadosprofessor.cidade}',
                    '${dadosprofessor.estado}',
                    '${dadosprofessor.cep}'
                    )`
    
    let result = await prisma.$executeRawUnsafe(sql);
    
    if(result)
        return true;
    else 
        return false;
}

//Retorna todos os alunos
const selectAllProfessores = async function () {
    
    //Script SQL
    let sql = `select*from tbl_professor`;

    //executa no BD o SQL
    let rsProfessor = await prisma.$queryRawUnsafe(sql);

    if(rsProfessor.length > 0)
        return rsProfessor;
    else 
        return false;


   
}

//busca alunos pelo ID
const selectbyIdProfessor = async function (id_professor) {
    
    //Script SQL
    let sql = `select*from tbl_professor where id_professor = ${id_professor}`;

    //executa no BD o SQL
    let rsProfessor = await prisma.$queryRawUnsafe(sql);

    if(rsProfessor.length > 0)
        return rsProfessor;
    else 
        return false;
}

//Update Aluno no BD
const updateProfessor = async function (dadosprofessor) {
    
    //Script SQL
    let sql = `UPDATE tbl_professor SET
                    nome = '${dadosprofessor.nome}',
                    celular = '${dadosprofessor.celular}',
                    email = '${dadosprofessor.email}',
                    cpf = '${dadosprofessor.cpf}',
                    data_nascimento = '${dadosprofessor.data_nascimento}',
                    logradouro = '${dadosprofessor.logradouro}',
                    bairro = '${dadosprofessor.bairro}',
                    cidade = '${dadosprofessor.cidade}',
                    estado = '${dadosprofessor.estado}',
                    cep = '${dadosprofessor.cep}',
                WHERE id_professor = ${dadosprofessor.id_professor}
                    `;

    //executa 0 script SQL no BD 
    let result = await prisma.$executeRawUnsafe(sql);

    if(result)
        return result;
    else 
        return false;
}

//Deletar Aluno no BD
const apagarProfessor = async function (id_professor) {
    
    //Script SQL
    let sql = `DELETE from tbl_professor 
                WHERE id_professor = ${id_professor}
                    `;

    //executa 0 script SQL no BD 
    let result = await prisma.$executeRawUnsafe(sql);

    if(result)
        return result;
    else 
        return false;
}


module.exports = {
    insertProfessor,
    selectAllProfessores,
    selectbyIdProfessor,
    updateProfessor,
    apagarProfessor
};