require("dotenv").config();
const { response } = require("express");
const express = require("express")

const categoriaController = require("./src/controllers/categorias.controller")
const tiposPagamentoController = require("./src/controllers/tiposPagamento.controller")
const despesasController = require("./src/controllers/despesas.controller")

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log("APP IS RUNNING")
})


// Rotas para acessar os controllers de despesas
//Consulta da despesa por ID
app.get("/api/despesas/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    res.json(despesasController.findDespesaById(id));  
})

//Consulta de todas as despesas
app.get("/api/despesas", async (req, res) => {
    const results = await despesasController.findDespesas();
    res.json(results);
})

//Consulta de todas as despesas pelo mes vigente
app.get("/api/despesasmes", async (req, res) => {
    const results = await despesasController.findDespesasByCurrentMonth();
    res.json(results)
})

//Cadastro de despesa
app.post("/api/despesas", async (req, res) => {
    const despesa = req.body;
    const results = await despesasController.createDespesa(despesa);
    console.log("results: " + JSON.stringify(results))
    res.json(results)
})

//Atualização de despesa pelo id
app.patch("/api/despesas/:id", async (req, res) => {

        const id = parseInt(req.params.id);
        const despesa = req.body;
        await despesasController.updateDespesa(id, despesa)
        res.sendStatus(200)
})

//Deleção de despesa pelo id
app.delete("/api/despesas/:id", async (req, res) => {
        const id = parseInt(req.params.id);
        await despesasController.deleteDespesa(id)
        res.sendStatus(200)
    
})

// Rotas para acessar os controllers de tipos de pagamento
//Consulta dos tipo de pagamento por ID
app.get("/api/tiposPagamento/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    res.json(tiposPagamentoController.findTipoPagamentoById(id));  
})

//Consulta de todos os tipos de pagamento
app.get("/api/tiposPagamento", async (req, res) => {
    const results = await tiposPagamentoController.findTiposPagamento();
    res.json(results);
})

//Cadastro de tipo de pagamento
app.post("/api/tiposPagamento", async (req, res) => {
    const tipoPagamento = req.body;
    tiposPagamentoController.createTipoPagamento(tipoPagamento);
    
})

//Atualização de tipo de pagamento pelo id
app.patch("/api/tiposPagamento/:id", async (req, res) => {

    const id = parseInt(req.params.id);
    const tipoPagamento = req.body;
    await tiposPagamentoController.updateTipoPagamento(id, tipoPagamento)
    res.sendStatus(200)
})

//Deleção de tipo de pagamento pelo id
app.delete("/api/tiposPagamento/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    await tiposPagamentoController.deleteTipoPagamento(id)
    res.sendStatus(200)
    
})

