"user strict";

let button = document.querySelector("#btn");

let paragraph = document.querySelector("#result");

function clicked(){
    paragraph.textContent = "Successfully clicked!";
}

button.addEventListener("click",clicked);