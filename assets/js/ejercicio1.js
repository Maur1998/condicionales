var img1 = document.querySelector("#img1");
var click = 1;

img1.onclick = () => {
  click += 1;
  if (click % 2 != 0) {
    img1.style.border = "none";
  } else {
    img1.style.border = "2px solid red";
  }
};
