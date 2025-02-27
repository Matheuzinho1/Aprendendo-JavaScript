/* -- Décimo Segundo Exercício -- */
let num = window.document.getElementById(`numero`);
let tab = window.document.getElementById(`tabuada`);

function tabu() {
  if (num.value.length == 0) {
    window.alert("ERROR - Preencha o campo");
  } else {
    let n1 = Number(num.value);
    tab.innerHTML = "";
    let i = 1;
    while (i <= 10) {
      let item = document.createElement(`option`);
      item.text = `${n1} X ${i} = ${n1 * i}`;
      item.value = `tab${i}`;
      tab.appendChild(item);
      i++;
    }
  }
}
