var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var input3 = document.querySelector("#input3");
var btn = document.querySelector("#btn");
var par = document.querySelector("#p1");

btn.onclick = () => {
  if (
    Number(input1.value) >= 0 &&
    Number(input2.value) >= 0 &&
    Number(input3.value) >= 0
  ) {
    var operacion =
      Number(input1.value) + Number(input2.value) + Number(input3.value);
    if (operacion <= 10) {
      par.innerHTML = `Llevas ${operacion} stickers`;
    } else {
      par.innerHTML = "Llevas demasiados stickers";
    }
  } else {
    par.innerHTML = "Ingresa valores positivos";
  }
};
