const btn = document.querySelector(".btn");
const bodyBG = document.querySelector("body");
const colors = ["blue", "yellow", "red", "green", "black", "grey", "purple"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexVal = document.querySelector(".hexVal")
const changeBG = () => {
  let hexCol = "#";
  for (let i = 0; i < 6; i++) {
    const rnd = Math.floor(Math.random() * hex.length);
    hexCol += hex[rnd];
  }
  bodyBG.style.backgroundColor = hexCol;
  hexVal.innerHTML = hexCol;
};

btn.addEventListener("click", changeBG);
