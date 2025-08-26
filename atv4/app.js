const express = require(`express`);
const app = express();
const PORT = 8081

app.get("/ano/:ano", (req, res) => {
    try {
        const{ano} = req.params;

        if (ano == undefined || ano == "" || isNaN(ano)) {
            return res.status(400).send(`Campos obrigatorios não prenchido`);
        }


        const calculo = parseFloat(ano) % 4;
        if (calculo == 0) {
            res.status(200).send(`<h1>Esse ano: ${ano} é bissexto</h1>`)
        }

        res.status(200).send(`<h1>Esse ano: ${ano} não é bissexto</h1>`);
    } catch (error) {
        console.error("Erro capturado:", error);
        res.status(500).send("Erro interno no servidor!");
    }
});
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})