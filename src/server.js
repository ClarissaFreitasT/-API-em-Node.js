import express from "express";
import { obterFilmes, criarFilme } from "./filmes.js";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/filmes", (req, res) => {
  const filmes = obterFilmes();
  res.json(filmes);
});

app.post("/filmes", (req, res) => {
  const { nome, data, genero } = req.body;

  if (!nome || !data || !genero) {
    return res.status(400).json({ erro: "Nome, data e gênero são obrigatórios" });
  }

  criarFilme(nome, data, genero);
  console.log(`✓ Filme criado: "${nome}"`);
  res.status(201).json({ mensagem: "Filme criado com sucesso!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

