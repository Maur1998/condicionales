var select1 = document.querySelector("#select1");
var select2 = document.querySelector("#select2");
var select3 = document.querySelector("#select3");
var btn = document.querySelector("#btn1");
var par = document.querySelector("#p1");

btn.onclick = () => {
  var password = select1.value + select2.value + select3.value;
  if (password == "911") {
    par.innerHTML = "Password 1 correcto";
  } else if (password == "714") {
    par.innerHTML = "Password 2 es correcto";
  } else {
    par.innerHTML = "Password incorrecto";
  }
};
