let button = document.querySelector("#calcular");
let res = document.querySelector("#resultado");
let random = Math.floor(Math.random() * 100);

button.addEventListener("click", () => {
  let palpite = prompt("Qual é o seu palpite?");
  let paragrafo = document.createElement("p");

  if (palpite > random) {
    res.innerHTML = `Você falou ${palpite}. Meu número é MENOR!`;
  } else if (palpite < random) {
    res.innerHTML = `Você falou ${palpite}. Meu número é MAIOR!`;
  } else {
    res.innerHTML = `PARABÉNS! Você acertou! Eu tinha sorteado o valor ${random}!`;
  }
});
