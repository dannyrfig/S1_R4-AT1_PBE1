const express = require("express");
const app = express();
const PORT = 8085;

app.get("/operacao/:tipo", (req, res) => {
  try {
    const { numUm, numDois } = req.query;
    const { tipo } = req.params;

    if (
      numUm == undefined ||
      numDois == undefined ||
      numUm == "" ||
      numDois == "" ||
      isNaN(numDois) ||
      isNaN(numUm)
    ) {
      return res.status(400).send(`Campos obrigatórios não preenchidos!`);
    }
    let resultado = 0;
    switch (tipo) {
      case "soma":
        resultado = parseFloat(numUm) + parseFloat(numDois);
        break;
      case "subtracao":
        resultado = parseFloat(numUm) - parseFloat(numDois);

        break;
      case "multiplicacao":
        resultado = parseFloat(numUm) * parseFloat(numDois);

        break;
      case "divisao":
        resultado = parseFloat(numUm) / parseFloat(numDois);

        if (numDois == 0) {
          return res.status(400).send(`Não possível dividir por zero!`);
        }
      default:
        return res.status(400).send(`É necessario mudança!`);
    }

    res.status(200).send(`<h1>O resultado do cálculo é ${resultado}`);
  } catch (error) {
    console.error("Erro capturado:", error);
    res.status(500).send(`Erro interno no servidor`);
  }
});
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});