const express = require("express");
const app = express();
const PORT = 8081;

app.get("/imc", (req, res) => {
  try {
    const { altura, peso } = req.query;

    if (
      peso === undefined ||
      altura === undefined ||
      peso === "" ||
      altura === "" ||
      isNaN(peso) ||
      isNaN(altura) ||
      peso <= 0 ||
      altura <= 0
    ) {
      return res
        .status(400)
        .send("Campos obrigatórios não preenchidos ou inválidos!");
    }

    const alturaImc = parseFloat(altura);
    const pesoImc = parseFloat(peso);
    const calculadoraImc = peso / (alturaImc * alturaImc);

    let classificacao = "";

    if (calculoImc < 18.5) {
      classificacao = "baixo peso";
    } else if (calculadoraImc >= 18.5 && calculadoraImc <= 24.9) {
      classificacao = "normal";
    } else if (calculadoraImc >= 25 && calculadoraImc <= 29.9) {
      classificacao = "sobrepeso";
    } else if (calculadoraImc >= 30 && calculadoraImc <= 39.9) {
      classificacao = "obesidade";
    };

    return res
      .status(200)
      .send(
        `<h1>Seu IMC é ${calculadoraImc.toFixed(
          2
        )} o seu peso está classificado na seguinte categoria  "${classificacao}"</h1>`
      );
  } catch (error) {
    console.error("Erro capturado:", error);
    res.status(500).send("Erro interno no servidor");
  }
});
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});