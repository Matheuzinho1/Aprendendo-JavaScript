// -- Décimo Oitavo Exercício --
let button = document.getElementById(`calculate`);
let analisado = document.getElementById(`analyzed`);

button.addEventListener(`click`, function () {
  let num = prompt(`Digite um número:`);
  let i = 0;

  analyzed.innerHTML = `O número a ser analisado aqui será o ${num}`;

  let array = [
    `O seu valor absoluto é ${Math.abs(num)}`,
    `A sua parte inteira é ${Math.trunc(num)}`,
    `O valor inteiro mais próximo é ${Math.ceil(num)}`,
    `A sua raiz quadrada é ${Math.sqrt(num)}`,
    `A sua raiz cúbica é ${Math.cbrt(num)}`,
    `O valor de ${num}\u00B2 é ${Math.pow(num, 2)}`,
    `O valor de ${num}\u00B3 é ${Math.pow(num, 3)}`,
  ];

  while (i < array.length) {
    let item = document.createElement(`p`);
    item.innerHTML = array[i];
    document.body.append(item);
    i++;
  }
});
