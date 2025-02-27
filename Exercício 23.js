const res = document.getElementById(`resultado`);
const calc = document.getElementById(`calcular`);

calc.addEventListener(`click`, () => {
  let num = prompt(`Digite um numero:`);

  res.innerHTML =
    num % 2 === 0
      ? `O número ${num} que foi digitado é <strong>PAR!</strong>`
      : `O número ${num} que foi digitado é <strong>IMPAR!</strong>`;
});
