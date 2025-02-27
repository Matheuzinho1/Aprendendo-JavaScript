let button = document.querySelector("#calcular");
let ano = new Date().getFullYear();
let res = document.querySelector("#resultado");

button.addEventListener("click", () => {
  let anoNasc = prompt("Digite o ano de nascimento:");
  let idadeAtual = ano - anoNasc;
  res.innerHTML = `Quem nasceu em ${anoNasc} vai completar <strong>${idadeAtual}</strong> anos em ${ano}.`;
});
