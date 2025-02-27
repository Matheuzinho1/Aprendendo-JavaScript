/* -- Sexto Exercício -- */
function somar() {
  let Snum1 = window.document.getElementById("txtn1");
  let Snum2 = window.document.querySelector("input#txtn2");
  let res = window.document.getElementById("res");
  let num1 = Number(Snum1.value);
  let num2 = Number(Snum2.value);
  let resu = num1 + num2;
  res.innerHTML = `A soma entre <strong>${num1}</strong> + <strong>${num2}</strong> é igual a ${resu}`;
}
