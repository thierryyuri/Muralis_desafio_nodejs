const mysql = require("mysql2/promise");

const client = mysql.createPool(process.env.CONNECTION_STRING);

// Procurando por todas as Despesas cadastradas no banco de dados
async function findDespesas(){
    const results = await client.query("SELECT * FROM despesas")
    let data = {}
    data.data = results[0];
    data.success = true;
    return data;
}

// Procurando por uma Despesa cadastrada pelo ID dela no banco de dados
async function findDespesaById(id){
    const results = await client.query("SELECT * FROM despesas WHERE id=?;", [id])
    return results[0];
}

// Procurando pelas despesas do mês vigente
async function findDespesasByCurrentMonth(){
    const dataAtual = new Date();

    //getMonth retorna o mes 3 para abril pois a contagem começa no 0 - janeiro = 0, fevereiro = 1, março = 2, abril = 3. Então temos que adicionar + 1 ao mês para retornar o mês correto do banco
    let mes = dataAtual.getMonth() + 1 
    let ano = dataAtual.getFullYear()
    
    const results = await client.query("SELECT * FROM despesas WHERE MONTH(data_compra) = ? AND YEAR(data_compra) = ?;", [mes, ano])
    let data = {}
    data.data = results[0];
    data.success = true;
    return data;
}

// Cadastrando uma Despesa no banco de dados
async function createDespesa(despesa){
    const values = [despesa.valor, despesa.dataCompra, despesa.descricao, despesa.tipoPagamentoId, despesa.categoriaId]
    let data = {}
    await client.query("INSERT INTO despesas(valor, data_compra, descricao, tipo_pagamento_id, categoria_id) VALUES (?,?,?,?,?)", values).then((result) => {
        data.data = result[0].insertId;
        data.success = true;
        console.log("data" + JSON.stringify(data))
    });
    return data
    
}


// Atualizando uma Despesa pelo ID dela no banco de dados
async function updateDespesa(id, despesa){
    const values = [despesa.valor, despesa.dataCompra, despesa.descricao, despesa.tipoPagamentoId, despesa.categoriaId, id]
    await client.query("UPDATE despesas SET valor = ?, data_compra = ?, descricao = ?, tipo_pagamento_id = ?, categoria_id = ? WHERE id=?", values);
}

// Deletando uma Despesa no banco de dados pelo ID dela
async function deleteDespesa(id){
    const values = [id];
    await client.query("DELETE FROM despesas WHERE id=?", values);
}

// Exportando as funções do arquivo para serem referenciados nas importações
module.exports = {
    findDespesas,
    findDespesaById,
    findDespesasByCurrentMonth,
    createDespesa,
    updateDespesa,
    deleteDespesa
}