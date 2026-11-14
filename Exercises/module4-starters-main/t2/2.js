"user strict";

let target = document.querySelector("#target");

let l1= document.createElement("li");
l1.textContent= "First item";
target.appendChild(l1);

let l2=document.createElement("li");
l2.textContent ="Second item";
target.appendChild(l2);

let l3=document.createElement("li");
l3.textContent="Third item";
target.append(l3);

target.setAttribute("class","my-item");