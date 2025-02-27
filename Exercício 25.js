const res = document.getElementById(`resultado`);
const calc = document.getElementById(`calcular`);

calc.addEventListener(`click`, () => {
  let agora = new Date();
  res.innerHTML = `O que eu recebi do sistema foi ${agora}`;
});
