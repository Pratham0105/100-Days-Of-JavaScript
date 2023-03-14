const button = document.querySelector("button");
const body = document.querySelector("body");

const colors =["blue", "green", "red", "pink", "purple", "yellow", "gray", "brown", "lightblue", "skyblue", "orange", "gold", "aqua", "azure"]

function changeTheBackgroundColor(){
    const colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
};

body.style.backgroundColor = "lightblue";

button.addEventListener("click", changeTheBackgroundColor);