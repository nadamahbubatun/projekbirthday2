let stars = document.getElementById("stars");
let meteorid = document.getElementById("meteorid");
let rocket = document.getElementById("rocket");
let text = document.getElementById("text");
let button = document.getElementById("button");


window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text.style.marginTop = value + 15 + "px";
  button.style.marginTop = value + 15 + "px";
  stars.style.marginTop = value + 15 + "px";
});


// Css nya jangan ngasal 

// window.addEventListener(scroll, function () {
//   let value = window.scrollY;
//   stars.style.left = value * 0.25 + "px";
// });
