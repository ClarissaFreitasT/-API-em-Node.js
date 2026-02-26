const filmes = [
    {
        id: 1,
        nome: "O Poderoso Chefão",
        data: "1972",
        genero: "Crime, Drama"
    },

    {
        id: 2,
        nome: "O Senhor dos Anéis: O Retorno do Rei",
        data: "2003",
        genero: "Fantasia"
    },

    {
        id: 3,
        nome: "Titanic",
        data: "1997",
        genero: "Romance"
    },

    {
        id: 4,
        nome: "O Rei Leão",
        data: "1994",
        genero: "Animação"
    },

    {
        id: 5,
        nome: "Jurassic Park",
        data: "1993",
        genero: "Aventura"
    },

    {
        id: 6,
        nome: "Os Vingadores",
        data: "2012",
        genero: "Ação"
    },

    {
        id: 7,
        nome: "Toy Story",
        data: "1995",
        genero: "Animação"
    },

    {
        id: 8,
        nome: "Pousando no Amor",
        data: "2019",
        genero: "Comédia romântica"
    },

    {
        id: 9,
        nome: "O Itaewon Class",
        data: "2020",
        genero: "Drama"
    },

    {
        id: 10,
        nome: "A O Amor Mora ao Lado",
        data: "2024",
        genero: "Comédia romântica"
    },

    {
        id: 11,
        nome: "Sweet Home",
        data: "2020",
        genero: "Terror"
    },

    {
        id: 12,
        nome: "Pretendente Surpresa",
        data: "2022",
        genero: "Comédia romântica"
    }
];

export function obterFilmes() {
  return filmes;
}

 export function encontrarFilmesId(id) {
  for (let i = 0; i < filmes.length; i++) {
    if (filmes[i].id === id) {
      return i;
    }
  }
  return -1;
}

 export function listarFilmes() {
  console.log("LISTA DE FILMES");

  filmes.forEach(function (filme) {
    console.log(
      ` Id: ${filme.id} 
       Nome: ${filme.nome}
       Data: ${filme.data}
       Gênero: ${filme.genero}
       -----------------------------`
    );
  });
}

 export function criarFilme(nome, data, genero) {
  const novoFilme = {
    id: filmes.length + 1,
    nome: nome,
    data: data,
    genero: genero
  };

  filmes.push(novoFilme);
}

export function atualizarFilme(id, novoNome, novaData, novoGenero) {
  const indiceEncontrado = encontrarFilmesId(id);

  if (indiceEncontrado === -1) {
    console.log(`Filme com id ${id} não encontrado`);
    return;
  }
  const filme = filmes[indiceEncontrado];

  if (novoNome !== undefined && novoNome.trim() !== "") {
    filme.nome = novoNome;
  }

  if (novaData !== undefined && novaData.trim() !== "") {
    filme.data = novaData;
  }

  if (novoGenero !== undefined && novoGenero.trim() !== "") {
    filme.genero = novoGenero;
  }

  console.log(`Filme ${filme.nome} atualizado!`);
}

export function excluirFilme(id) {
  const indiceEncontrado = encontrarFilmesId(id);

  if (indiceEncontrado === -1) {
    console.log(`Filme com id ${id} não encontrado`);
    return;
  }

  const filmeRemovido = filmes[indiceEncontrado];

  filmes.splice(indiceEncontrado, 1);

  console.log(`Filme removido: ${filmeRemovido.nome}`);
}

