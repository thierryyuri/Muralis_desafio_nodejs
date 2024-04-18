const mysql = require("mysql2/promise");

const client = mysql.createPool(process.env.CONNECTION_STRING);

// Procurando por todas as categorias cadastradas no banco de dados
async function findCategorias(){
    const results = await client.query("SELECT * FROM categorias")
    return results[0];
}

// Procurando por uma categoria cadastrada pelo ID dela no banco de dados
async function findCategoriaById(){
    const results = await client.query("SELECT * FROM categorias WHERE id=?;", [id])
    return results[0];
}

// Cadastrando uma categoria no banco de dados
async function createCategoria(categoria){
    const values = [categoria.nome, categoria.descricao]
    await client.query("INSERT INTO categorias(nome, descricao) VALUES (?,?)", values);
}


// Atualizando uma categoria pelo ID dela no banco de dados
async function updateCategoria(id, categoria){
    const values = [categoria.nome, categoria.descricao, id]
    await client.query("UPDATE categorias SET nome = ?, descricao = ? WHERE id=?", values);
}

// Deletando uma categoria no banco de dados pelo ID dela
async function deleteCategoria(id){
    const values = [id];
    await client.query("DELETE FROM categorias WHERE id=?", values);
}

// Exportando as funções do arquivo para serem referenciados nas importações
module.exports = {
    findCategorias,
    findCategoriaById,
    createCategoria,
    updateCategoria,
    deleteCategoria
}