/* -- Décimo Quinto Exercício -- */
let button = document.getElementById(`calc`);
let res = document.getElementById(`res`);
button.addEventListener(`click`, function () {
  let num = Number(prompt("Insira o primeiro numero"));
  let res1 = num + num;
  let res2 = num / 2;
  res.innerHTML = `O dobro de ${num} é ${res1} e a metade é ${res2}!`;
});
