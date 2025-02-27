let button = document.querySelector("#calcular");
let reset = document.querySelector("#reset");
let res = document.querySelector("#resultado");

button.addEventListener("click", () => {
  let random = document.createElement("p");
  let numero = Math.floor(Math.random() * (-200 - 100) + 100);
  random.innerHTML = `Acabei de pensar no número ${numero}`;
  res.appendChild(random);
});

reset.addEventListener("click", () => {
  res.innerHTML = "";
});
