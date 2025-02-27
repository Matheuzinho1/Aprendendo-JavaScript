// -- Décimo Sétimo Exercício --
let button = document.getElementById(`calc`);
let alerta1 = document.getElementById(`res1`);
let alerta2 = document.getElementById(`res2`);
let alerta3 = document.getElementById(`res3`);

button.addEventListener(`click`, soma);
function soma() {
  let nome = prompt("Insira o nome do aluno");
  let num1 = prompt("Insira o primeiro valor");
  let num2 = prompt("Insira o segundo valor");

  num1 = Number(num1);
  num2 = Number(num2);

  let res = (num1 + num2) / 2;

  alerta1.innerHTML = `Calculando a média final de ${nome}`;
  alerta2.innerHTML = `As notas obtidas foram ${num1} e ${num2}`;
  alerta3.innerHTML = `A média final será ${res}.`;
}
