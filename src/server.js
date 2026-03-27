import express from "express";
import { obterFilmes, criarFilme, excluirFilme, atualizarFilme} from "./filmes.js";
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

  const novoFilme = criarFilme(nome, data, genero);
  console.log(`✓ Filme criado: "${nome}"`);
  res.status(201).json({ mensagem: `Filme "${novoFilme.nome}" criado com sucesso!` });
});

app.delete("/filmes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  excluirFilme(id);

  res.status(200).json({
    mensagem: `Filme com id ${id} removido`
  });
});

app.patch("/filmes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, data, genero } = req.body;

  atualizarFilme(id, nome, data, genero);

  res.status(200).json({
    mensagem: `Filme com id ${id} atualizado`
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
