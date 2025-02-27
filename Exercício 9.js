/* -- Nono Exercício -- */
let agora = new Date();
let hora = String(agora.getHours()).padStart(2, "0");
let minutos = String(agora.getMinutes()).padStart(2, "0");
let segundos = String(agora.getSeconds()).padStart(2, "0");
let title = document.getElementById("title");
let img = document.getElementById("photo");
let bg = document.getElementsByTagName("body");

if (hora < 6) {
  title.innerHTML = `Agora são <strong>${hora}:${minutos}:${segundos}</strong> da Madrugada`;
  bg[0].style.background = "black";
  img.src =
    "https://images.pexels.com/photos/2406397/pexels-photo-2406397.jpeg?auto=compress&cs=tinysrgb&w=300";
} else if (hora < 12) {
  title.innerHTML = `Agora são <strong>${hora}:${minutos}:${segundos}</strong> da Manhã`;
  bg[0].style.background = "lightblue";
  img.src =
    "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&w=300";
} else if (hora < 18) {
  title.innerHTML = `Agora são <strong>${hora}:${minutos}:${segundos}</strong> da Tarde`;
  bg[0].style.background = "orange";
  img.src =
    "https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg?auto=compress&cs=tinysrgb&w=300";
} else {
  title.innerHTML = `Agora são <strong>${hora}:${minutos}:${segundos}</strong> da Noite`;
  bg[0].style.background = "darkblue";
  img.src =
    "https://images.pexels.com/photos/33696/night-star-moon-big-bar.jpg?auto=compress&cs=tinysrgb&w=300";
}
