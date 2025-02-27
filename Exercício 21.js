let calc = document.getElementById("calcular");
let res = document.getElementById("resultado");

calc.addEventListener("click", calc_media);

function calc_media() {
  let nome = prompt("Qual é o nome do aluno?");
  let num1 = parseFloat(prompt(`Qual foi a primeira nota de ${nome}?`));
  let num2 = parseFloat(
    prompt(`Além de ${num1}, qual foi a outra nota de ${nome}?`)
  );
  let media = (num1 + num2) / 2;

  let mensagens = [
    `Calculando a média final de ${nome}.`,
    `As notas obtidas foram ${num1} e ${num2}.`,
    `A média final será ${media}.`,
  ];

  let item = document.createElement("p");

  res.innerHTML = "";

  mensagens.forEach((mensagem) => {
    let item = document.createElement("p");
    item.textContent = mensagem;
    res.appendChild(item);
  });

  let mensagemFinal = media > 6 ? "Meus parabéns!" : "Estude um pouco mais!";
  let itemFinal = document.createElement("p");
  itemFinal.innerHTML = `A mensagem que temos é: <strong>${mensagemFinal}</strong>`;
  res.appendChild(itemFinal);
}
