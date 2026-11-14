"user strict";

let paragraph = document.querySelector("#trigger");


let image = document.querySelector("#target");

paragraph.addEventListener("mouseover", function() {
    image.setAttribute("src", "img/picB.jpg");
})


paragraph.addEventListener("mouseout", function() {
    image.setAttribute("src", "img/picA.jpg");
})