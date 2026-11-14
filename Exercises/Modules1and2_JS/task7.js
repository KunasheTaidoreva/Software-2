"use strict";

let dice = Number(prompt("Enter the times you wish to roll the dice"));

let sum = 0;

for (let i=1; i<=dice; i++){
    let random=Math.floor(Math.random()*6)+1;
    console.log(random);
    sum = sum + random; 
}

let result = document.querySelector("#total");

result.textContent=`The sum of the random numbers on the dice is ${sum}`;