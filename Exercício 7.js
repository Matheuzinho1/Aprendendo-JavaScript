/* -- Sétimo Exercício -- */
function vel() {
  let TNum1 = document.getElementById("vel");
  let Num1 = Number(TNum1.value);
  let res = document.getElementById("res");
  if (Num1 > 50) {
    res.innerHTML = `Sua velocidade é de <strong>${Num1}</strong> Km/h, o limite é <strong>50 Km/h</strong>. Você foi multado!`;
    res.style.color = "red";
  } else {
    res.innerHTML = `Sua velocidade é de <strong>${Num1}</strong> Km/h. Está dentro do limite.`;
    res.style.color = "green";
  }
}
