"use strict";

function subtracao1(a, b) {
  return a - b;
}

let subtracao2 = (a, b) => a - b;

// ------------------------------
function soma1(a) {
  return a + 2;
}

let soma2 = (a) => a + 2;

// ------------------------------
function diaDoMes1() {
  return new Date().getDate();
}

let diaDoMes2 = () => new Date().getDate();

// ------------------------------
function superFuncao1(a, b) {
  let resultadoSubtracao = a - b;
  resultadoSubtracao -= 2;
  let dataDiaDoMes = new Date().getDate();
  return dataDiaDoMes;
}

const superFuncao2 = (a, b) => {
  let resultadoSubtracao = a - b;
  resultadoSubtracao -= 2;
  let dataDiaDoMes = new Date().getDate();
  return dataDiaDoMes;
};

// ------------------------------
let exibir1 = (num) => {
  console.log(num);
};

let soma3 = (a, b, callback) => {
  var op = a + b;
  callback(op);
};

function multi1(a, b, cb) {
  var op = a * b;
  cb(op);
}

soma3(2, 2, exibir1);
multi1(2, 4, exibir1);

// ------------------------------
const person = {
  firstName: `Matheus`,
  lastName: `Soares`,
};

function fullNameFN() {
  return `${this.firstName} ${this.lastName}`;
}

const boundFullNameFn = fullNameFN.bind(person);
console.log(boundFullNameFn());

// ------------------------------
const person2 = {
  firstName: `Matheus`,
  lastName: `Lourenço`,
};

const fullNameArrow = function () {
  return `${this.firstName} ${this.lastName}`;
};

const boundFullNameArrow = fullNameArrow.bind(person2);
console.log(boundFullNameArrow());

// ------------------------------
function objeto() {
  let eu = {
    pNome: `Fodase`,
  };

  const nomeCompleto = function () {
    return `${this.pNome}`;
  }.bind(eu);

  console.log(nomeCompleto());
}

// ------------------------------
const carro = {
  Marca: "Fiat",
  Modelo: "Fastback",
  Ano: 2025,
};

function carroAtual() {
  return `Carro da marca ${this.Marca}, do seguinte modelo ${this.Modelo} de ${this.Ano} é muito bom`;
}

const carroAtual2 = carroAtual.bind(carro);
console.log(carroAtual2());

// ------------------------------
let frutas = ["Maçã", "Banana", "Uva"];

frutas.forEach((nome, id, com) => {
  console.log(`${nome}, ${id}, ${com}`);
});

// ------------------------------
let numeros = [1, 2, 3];

numeros.forEach((num, i, arr) => {
  arr[i] = num * 2;
});

console.log(numeros);

// ------------------------------
function Pessoas1(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.nomeCompleto = function () {
    return this.nome + " " + this.sobrenome;
  };
}

let joao = new Pessoas1("João", "da Silva");
let maria = new Pessoas1("Maria", "dos Santos");

console.dir(Pessoas1);

console.group("João");
console.log(joao.nomeCompleto());
console.groupEnd();

console.group("Maria");
console.log(maria.nomeCompleto());
console.groupEnd();

// ------------------------------
class Filme {
  constructor(titulo, ano, genero, diretor, duracao) {
    this.titulo = titulo;
    this.ano = ano;
    this.genero = genero;
    this.diretor = diretor;
    this.atores = [];
    this.duracao = duracao;
  }

  Reproduzir() {
    console.log("Reproduzindo.....");
  }

  Pausar() {
    console.log("Pausado ||");
  }

  Avancar() {
    console.log("Avançar >>");
  }

  Fechar() {
    console.log("Fechar X");
  }
}

var vingadores2 = new Filme("Vingadores 2", 2014, "Ação", "Alguem", "2 Horas");
var batman = new Filme("Batman", 2009, "Ação", "Alguem2", "3 Horas");

console.log();

// ------------------------------
function Usuario(nome) {
  this.nome = nome;
  this.log = function () {
    console.log(this);
  };
}

const Matheus = new Usuario("Matheus");
console.log(Matheus);

console.log(Matheus instanceof Usuario);

// ------------------------------
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const pessoa1 = new Pessoa("Matheus", 25);
const pessoa2 = new Pessoa("Ana", 30);

console.log(pessoa1.nome);
console.log(pessoa2.nome);

// ------------------------------
/* let div = documento.createElement("div");
let p = documento.createElement("p");

for (let i = 0; i < 10; i++) {
  let p = document.createElement("p");
  p.innerHTML = `Parágrafo ${i + 1}`;
  div.appendChild(p);
}

console.log(div.childNodes); 
*/

// ------------------------------
let a = {
  nome: "João",
  idade: 20,
  profissao: "Programador",
};

console.log(a);

// ------------------------------
class PessoaClass {
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }

  falar() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
}

// ------------------------------
let pessoa3 = new PessoaClass("João", 20, "Programador");
console.log(pessoa3);

pessoa3.falar();

// ------------------------------
let array = ["Matheus", "Souza", "Silvestre"];

let array2 = array.map((item) => {
  return item.length;
});

let array3 = array2.filter((item) => {
  return item > 5;
});

array3
  .sort((a, b) => a - b)
  .forEach((item, index) => {
    console.log(item, "<= TAMANHO - INDICE =>", index);
  });

// ------------------------------
let promessa = new Promise((resolve, reject) => {
  let sucesso = false;

  if (sucesso) {
    resolve("A operação foi bem-sucedida!");
  } else {
    reject("A operação falhou!");
  }
});

promessa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.log(erro);
  });
// ------------------------------
const menina = {
  nome: "Ana",
  jogos: ["Vôlei", "Basquete", "Futebol"],
  fullBio() {
    this.jogos.forEach((jogo) => {
      console.log(`${this.nome} gosta de ${jogo}`);
    });
  },
};

menina.fullBio();

// ------------------------------
class Pessoa2 {
  constructor(nome, idade, estuda) {
    this.nome = nome;
    this.idade = idade;
    this.estuda = estuda;
  }
  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
}

let pessoa4 = new Pessoa2(
  "Matheus",
  16,
  "Desenvolvimento de Sistemas"
).saudacao();

// ------------------------------

const user = {
  name: "Matheus",
  idade: 16,
  profissao: "Programador",
  adress: {
    rua: "Rua 1",
    numero: 123,
    bairro: "Bairro 1",
    cidade: "Cidade 1",
  },
};

console.log(`car` in user);
// ------------------------------
this.name = "Matheus";
const obj = {
  name: "João",
  getName() {
    return this.name;
  },
};
console.log(obj.getName());
// ------------------------------
this.name = "Camilla";
function sayMyName(age) {
  this.age = age;
  console.log(this.name, this.age);
}

const dev = {
  name: "Matheus",
};

sayMyName.call(this, 18);
sayMyName.call(dev, 19);
// ------------------------------
let funcao = function () {
  return `Olá, Mundo!`;
};

console.log(funcao());

let funcao2 = () => `Olá, Mundo!`;
console.log(funcao2());

let funcao3 = function () {
  return `Olá, Mundo!`;
};
console.log(funcao3());
// ------------------------------
var num1 = 1;
num2 = 2;
console.log(num1 + num2);
var num2;
