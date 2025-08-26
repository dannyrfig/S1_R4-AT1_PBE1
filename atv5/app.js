const express = require("express");
const app = express();
const PORT = 8081;

let saudacao; 

app.get("/saudacao/:nome", (req, res) => {
  try {
    const nome = req.params.nome; 
    const horaDia = parseInt(req.query.hora); 

    if (isNaN(horaDia) || horaDia < 0 || horaDia > 23) {
      return res.status(400).send("A hora foi identificada, digite um número entre o e 23"); 
    } 

    if (horaDia >= 0 && horaDia < 12) {
      saudacao = `Bom dia ! ${nome}`; 
      return res.status(200).send(saudacao)

    } else if (horaDia >= 12 && horaDia < 18) {
      saudacao = "Boa tarde !"; 
      return res.status(200).send(saudacao)
    } else {
      saudacao = "Boa noite !"; 
      return res.status(200).send(saudacao)
    }

    res.send(`${saudacao}, ${nome}!`); 

  } catch (error) {
    console.error(`Erro  ${error}`); 
    res.status(500).send("Erro ao processar =( !"); 
  }
});

app.listen(PORT, () => { 
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});