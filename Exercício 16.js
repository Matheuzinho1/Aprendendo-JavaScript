// -- Décimo Sexto Exercício --
let button = document.getElementById(`calc`);
let alerta = document.getElementById(`res`);
button.addEventListener(`click`, soma);

function soma() {
  let num1 = Number(prompt("Insira o primeiro número"));
  let num2 = Number(prompt("Insira o segundo número"));

  let res = num1 + num2;
  alerta.innerHTML = `${num1} + ${num2} = ${res}`;
}
