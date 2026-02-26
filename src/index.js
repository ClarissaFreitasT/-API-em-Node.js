import {
  listarFilmes,
  criarFilme,
  atualizarFilme,
  excluirFilme
} from "./filmes.js";

listarFilmes();

console.log("Adicionando novo filme");
criarFilme("Desbloqueado", "2023 ", "Crime ");


atualizarFilme(1, "", "Crime");
excluirFilme(2);

listarFilmes();

