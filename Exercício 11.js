/* -- Décimo Primeiro Exercício -- */
function calc() {
  let inicio = Number(window.document.getElementById(`inicio`).value);
  let fim = Number(window.document.getElementById(`fim`).value);
  let passo = Number(window.document.getElementById(`passo`).value);
  let res = window.document.getElementById(`res`);

  res.innerHTML = ``;

  if (passo == "" || inicio == "" || fim == "") {
    window.alert("Campo em branco");
  } else {
    if (inicio <= passo) {
      for (soma = inicio; soma <= fim; soma += passo) {
        res.innerHTML += `${soma} `;
      }
    } else {
      for (soma = inicio; soma >= fim; soma -= passo) {
        res.innerHTML += `${soma} `;
      }
    }
  }
}
