const mysql = require("mysql2/promise");

const client = mysql.createPool(process.env.CONNECTION_STRING);

// Procurando por todas as categorias cadastradas no banco de dados
async function findTiposPagamento(){
    const results = await client.query("SELECT * FROM tipos_pagamento")
    return results[0];
}

// Procurando por uma categoria cadastrada pelo ID dela no banco de dados
async function findTipoPagamentoById(){
    const results = await client.query("SELECT * FROM tipos_pagamento WHERE id=?;", [id])
    return results;
}

// Cadastrando uma categoria no banco de dados
async function createTipoPagamento(tipoPagamento){
    const values = [tipoPagamento.tipo]
    const result = await client.query("INSERT INTO tipos_pagamento(nome, descricao) VALUES (?,?)", values);
    let data = {}
    data.data = results;
    data.success = true;
    return data;
}

// Atualizando uma categoria pelo ID dela no banco de dados
async function updateTipoPagamento(id, tipoPagamento){
    const values = [tipoPagamento.tipo, id]
    await client.query("UPDATE tipos_pagamento SET tipo = ? WHERE id=?", values);
}

// Deletando uma categoria no banco de dados pelo ID dela
async function deleteTipoPagamento(id){
    const values = [id];
    await client.query("DELETE FROM tipos_pagamento WHERE id=?", values);
}

// Exportando as funções do arquivo para serem referenciados nas importações
module.exports = {
    findTiposPagamento,
    findTipoPagamentoById,
    createTipoPagamento,
    updateTipoPagamento,
    deleteTipoPagamento
}