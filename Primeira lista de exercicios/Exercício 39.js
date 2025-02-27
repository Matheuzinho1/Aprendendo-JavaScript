let input1 = document.querySelector("#input1");
let button1 = document.querySelector("#button1");
let res = document.querySelector("#res");
let select = document.querySelector("select");

function fatorando() {
  console.log("Fui clicado");
  res.innerHTML = "";
  let n = Number(input1.value);
  let originalN = n;
  let fatorial = 1;

  while (n > 1) {
    fatorial *= n;
    n--;
  }

  let item = document.createElement("option");
  item.setAttribute("class", "results");
  item.text = `O fatorial de ${originalN.toLocaleString(
    "pt-BR"
  )} é igual a ${fatorial.toLocaleString("pt-BR")}`;
  res.appendChild(item);
}
