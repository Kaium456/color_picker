let hexNumber = document.getElementById("hexNumber");
let color = document.getElementById("color");

color.addEventListener("input", () => {
  let inputColor = color.value;
  hexNumber.value = inputColor;
  let name = (document.getElementById("name").style.color = inputColor);
});
