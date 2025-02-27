/* -- Quinto Exercício -- */
let a = window.document.getElementById("interacao");
a.addEventListener("click", clicar);
a.addEventListener("mouseenter", entrar);
a.addEventListener("mouseout", sair);
a.addEventListener("mousedown", pressionado);
a.addEventListener("mouseup", solto);
a.addEventListener("mousemove", movendo);
a.addEventListener("dblclick", duploClique);

function clicar() {
  a.innerText = "Clicado!";
  a.style.background = "red";
}

function entrar() {
  a.innerText = "Entrou!";
}

function sair() {
  a.innerText = "Saiu!";
  a.style.background = "green";
}
