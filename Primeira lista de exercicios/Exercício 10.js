/* -- Décimo Exercício -- */
function verificar() {
  let agora = new Date();
  let ano = agora.getFullYear();
  let fano = document.getElementById(`nascimento`);
  let res = document.getElementById(`res`);

  if (fano.value == 0 || Number(fano.value) > ano) {
    window.alert("Por favor, insira um ano válido.");
  } else {
    let fsex = document.getElementsByName(`radsex`);
    let idade = ano - Number(fano.value);
    let genero = "";

    if (fsex[0].checked) {
      genero = `Homem`;
    } else {
      genero = `Mulher`;
    }
    res.innerHTML = `${genero} com ${idade} anos`;
  }
}
