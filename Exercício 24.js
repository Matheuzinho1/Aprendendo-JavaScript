const res = document.getElementById(`resultado`);
const calc = document.getElementById(`calcular`);

calc.addEventListener(`click`, () => {
  let num1 = Number(prompt(`Insira o primeiro valor:`));
  let num2 = Number(prompt(`Insira o segundo valor`));

  if (isNaN(num1) || isNaN(num2)) {
    res.innerHTML = "Por favor, insira valores numéricos válidos.";
  } else if (num1 > num2) {
    res.innerHTML = `Analisando os valores ${num1} e ${num2}, o maior valor é ${num1}.`;
  } else if (num2 > num1) {
    res.innerHTML = `Analisando os valores ${num1} e ${num2}, o maior valor é ${num2}.`;
  } else {
    res.innerHTML = `Os valores ${num1} e ${num2} são iguais.`;
  }
});
