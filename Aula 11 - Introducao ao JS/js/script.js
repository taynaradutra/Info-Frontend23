const PI = 3.14;

var nome = "Taynara";
var dtNascimento = "27/12/1995";

var anoAtual = new Date().getFullYear();
console.log(anoAtual);

var anoNasc = dtNascimento.split("/")[2];
console.log(anoNasc);

var idade = anoAtual - anoNasc;
console.log(idade);

var teste = false;
console.log(teste);

var conhecimentosTecnicos = ["CSS", "HTML", "Javascript", "Bootstrap"];
console.log(conhecimentosTecnicos[1]);

var funcionario = {
  id: 1,
  nome: "João",
  sobrenome: "Silva",
  dtNasc: "05/05/89",
  funcao: "Encarregado",
  departamento: {
    id: 1,
    setor: "Compras",
  },
};

console.log(funcionario.nome, funcionario.departamento.setor);

console.log(typeof funcionario);
console.log(typeof PI);
console.log(typeof nome);

//template strings
console.log(
  `A pessoa com nome: ${nome} possui a idade ${idade} e nasceu em ${dtNascimento}`
);
// diferencia letra maiuscula de minuscula
var pi = 5;

console.log(PI, pi);

// Operador de atribuição =
var teste = 5;

// Operador de comparação  ==
// Comparação entre dados da variável, independente do tipo

// Operador de comparação ===
// Comparação entre dados e tipo.

var x = "10";

if (x === "5") {
  console.log("é igual!");
} else {
  console.log("não é igual!");
}

// Operador condicional ternário
// condicao ? exp1 : exp2;

console.log(x === "10" ? "é igual" : "não é igual");

for (let i = 0; i <= 9; i++) {
  console.log(i);
}

// iterar sobre objetos

var categorias = {
  eletronicos: "Eletrônicos",
  moveis: "Móveis",
  telefonia: "Smartphones",
  automotivo: "Automotiva",
};

var impressao = () => {
  for (let cat in categorias) {
    console.log(`Categoria: ${categorias[cat]}`);
  }
};

impressao();

console.log(typeof impressao);

const numeroAleatorio = () => Math.random();
console.log(numeroAleatorio());
