const express = require("express");
const app = express();
const PORT = 8081;

app.get("/soma", (req, res) => {
    try {
        const { numUm, numDois } = req.query

        if (numUm == undefined || numDois == undefined || numUm == "" || numDois == "" || isNaN(numDois) || isNaN(numUm)) {
            return res.status(400).send(`Campos obrigatórios não preenchidos!`);

        }
        const soma = parseFloat(numUm) + parseFloat(numDois)

        res.status(200).send(`<h1>O resultado da soma é ${soma}`);
    } catch (error) {
        console.error("Erro capturado:", error);
        res.status(500).send(`Erro interno no servidor`);
    }
});

app.get("/subtracao", (req, res) => {
    try {
        const { numUm, numDois } = req.query

        if (numUm == undefined || numDois == undefined || numUm == "" || numDois == "" || isNaN(numDois) || isNaN(numUm)) {
            return res.status(400).send(`Campos obrigatórios não preenchidos!`);

        }
        const subtracao = parseFloat(numUm) - parseFloat(numDois)

        res.status(200).send(`<h1>O resultado da subtração é ${subtracao}`);
    } catch (error) {
        console.error("Erro capturado:", error);
        res.status(500).send(`Erro interno no servidor`);
    }
});

app.get("/multiplicacao", (req, res) => {
    try {
        const { numUm, numDois } = req.query

        if (numUm == undefined || numDois == undefined || numUm == "" || numDois == "" || isNaN(numDois) || isNaN(numUm)) {
            return res.status(400).send(`Campos obrigatórios não preenchidos!`);

        }
        const multiplicacao = parseFloat(numUm) * parseFloat(numDois)

        res.status(200).send(`<h1>O resultado da multiplicação é ${multiplicacao}`);
    } catch (error) {
        console.error("Erro capturado:", error);
        res.status(500).send(`Erro interno no servidor`);
    }
});
app.get("/divisao", (req, res) => {
    try {
        const { numUm, numDois } = req.query

        if (numUm == undefined || numDois == undefined || numUm == "" || numDois == "" || isNaN(numDois) || isNaN(numUm)) {
            return res.status(400).send(`Campos obrigatórios não preenchidos!`);

        }

        if (numDois == 0 ){
            return res.status(400).send(`Não possível dividir por zero!`)
        }
        
        const divisao = parseFloat(numUm) / parseFloat(numDois)

        res.status(200).send(`<h1>O resultado da divisão é ${divisao}`);
    } catch (error) {
        console.error("Erro capturado:", error);
        res.status(500).send(`Erro interno no servidor`);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});