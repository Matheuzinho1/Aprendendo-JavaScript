let button = document.querySelector("#calcular");
let res = document.querySelector("#resultado");

button.addEventListener("click", () => {
  let num1 = Number(prompt("Digite o primeiro número:"));
  let num2 = Number(prompt("Digite o segundo número:"));
  let operacao = prompt("Digite a operação desejada (+, -, *, /):");

  switch (operacao) {
    case "+":
      res.innerHTML = `O resultado da soma é: ${num1 + num2}`;
      break;
    case "-":
      res.innerHTML = `O resultado da subtração é: ${num1 - num2}`;
      break;
    case "*":
      res.innerHTML = `O resultado da multiplicação é: ${num1 * num2}`;
      break;
    case "/":
      res.innerHTML = `O resultado da divisão é: ${num1 / num2}`;
      break;
    default:
      res.innerHTML = "Operação inválida!";
  }
});
