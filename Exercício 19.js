let contar = document.getElementById(`calcular`);
let zerar = document.getElementById(`zerar`);
let res = document.getElementById(`resultado`);

let num = 0;

contar.addEventListener(`click`, function () {
  num += 1;
  res.innerHTML = `O contador está com ${num} cliques.`;
});

zerar.addEventListener(`click`, function () {
  res.innerHTML = ``;
  num = 0;
});
