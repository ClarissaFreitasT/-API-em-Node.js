import express from "express";
const app = express();
const PORTA = 3000;

app.use(express.json());

app.get("/filmes", (req, res) => {
  res.status(200).json(filmes);
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});

app.get("/filmes", (req, res) => {
  res.status(200).json(filmes);
});