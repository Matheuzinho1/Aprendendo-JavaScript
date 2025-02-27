/* -- Quarto Exercício -- */
let corpo = window.document.body;
let p1 = window.document.getElementsByTagName("p")[0];
window.document.write("Está escrito assim: " + p1.innerText);
corpo.style.background = "black";
p1.style.color = "red";
window.alert(p1.innerText);

let mesg = window.document.getElementById("msg");
mesg.style.background = "green";
mesg.innerText = "Fodase";
window.document.getElementById("msg").innerText = "fodase";
let mesg = window.document.querySelector("div#msg");
mesg.style.background = "blue";
