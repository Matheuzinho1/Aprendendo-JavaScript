let input1 = document.querySelector("#input1");
let button1 = document.querySelector("#button1");
let res = document.querySelector("#res");
let select = document.querySelector("select");

function tabuada() {
  console.log("Fui clicado");

  res.innerHTML = "";

  if (input1.value.length == 0) {
    alert("Por favor, digite um número!");
  } else {
    let n = Number(input1.value);
    let c = 1;
    while (c <= 10) {
      let item = document.createElement("option");
      item.setAttribute("class", `results`);
      item.text = `${n} x ${c} = ${n * c}`;
      res.appendChild(item);
      c++;
    }
  }
  select.addEventListener("change", copyToClipboard);
}

function copyToClipboard() {
  let selectedOption = select.options[select.selectedIndex].text;
  navigator.clipboard
    .writeText(selectedOption)
    .then(() => {
      alert("Texto copiado para a área de transferência!");
    })
    .catch(() => {
      alert("Erro ao copiar o texto para a área de transferência.");
    });
}
