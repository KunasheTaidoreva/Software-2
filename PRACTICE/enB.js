"use strict";

console.dir(window);
let timerId= null;

//function deleteBox(evt)

function timedAction() {
    //Fetch the div
    let boxDiv= document.querySelector(".box");

    //create a new p element
    let new_p = document.createElement("p");
    //add text to paragraph
    new_p.innerText= "I am a box!";
    //give the paragraph a class
    //new_p.className="div-green";
    new_p.setAttribute("class","div-green");
    //add event handler to paragraph
    //why new_p.addEventListener("click", deleteBox);
    //add paragraph as child of the div
    boxDiv.appendChild(new_p);
}

function startMakingBoxes(){
    timerID=setInterval(timedAction, 2000);
    console.log("Starting making boxes....");
}

function stopMakingBoxes(){
    clearInterval(timerID)
}

let start_button=document.getElementById("start");
let end_button= document.getElementById("end");

start_button.addEventListener("click", startMakingBoxes);
end_button.addEventListener("click", stopMakingBoxes);