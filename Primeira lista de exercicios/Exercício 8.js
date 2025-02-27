/* -- Oitavo Exercício -- */
/* -- Analisador de voto opcional/obrigatório -- */
let idade = 17;
if (idade < 16) {
  console.log("Não pode votar");
} else {
  if (idade >= 16 && idade < 18) {
    console.log("Voto opcional");
  } else {
    console.log("Voto obrigatório");
  }
}

/* -- Exibindo hora e saudação -- */
let agora = new Date();
let hora = agora.getHours();
let minutos = agora.getMinutes();
let segundos = agora.getSeconds();
console.log(`Agora são ${hora}:${minutos}:${segundos}`);

if (hora < 6) {
  console.log("Boa madrugada");
} else if (hora < 12) {
  console.log("Bom dia");
} else if (hora < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}

/* -- Exibindo dia da semana -- */
let diaSem = agora.getDay();

switch (diaSem) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  case 4:
    console.log("Quinta");
    break;
  case 5:
    console.log("Sexta");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
    break;
}
