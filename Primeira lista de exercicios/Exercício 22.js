let pergunta = `Lucas é legal?`;

console.log(pergunta);

let input = document.createElement("input");
input.setAttribute("id", "resposta");
document.body.appendChild(input);

let resposta = input.value;

let resultadoFinal = resposta === "sim" ? "Sabíamos" : "Claro que é";

console.log(resultadoFinal);
