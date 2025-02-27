let button = document.querySelector("button");
let inputs = document.querySelectorAll("input");
let res = document.querySelector("#segunda-parte");

button.addEventListener("click", () => {
  let input1 = Number(inputs[0].value);
  let input2 = Number(inputs[1].value);

  if (input1 == "" || input2 == "") {
    alert("Preencha todos os campos");
  } else if (input1 == 0 || input2 == 0) {
    alert("Não é possível contar de 0");
  } else if (input1 == input2) {
    alert("Os valores são iguais");
  } else {
    let title = document.createElement("h1");
    title.textContent = `Contando de ${input1} até ${input2}`;
    res.appendChild(title);

    if (input1 < input2) {
      while (input1 <= input2) {
        let p = document.createElement("p");
        p.textContent = input1 + " ";
        res.appendChild(p);
        input1++;
      }
    } else if (input1 > input2) {
      while (input1 >= input2) {
        let p = document.createElement("p");
        p.textContent = input1 + " ";
        res.appendChild(p);
        input1--;
      }
    }
  }
});
