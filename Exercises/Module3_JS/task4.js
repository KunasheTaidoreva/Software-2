"user strict";

let Array=[];

let number = Number(prompt("Enter your a number"));

while(number != 0){
    Array.push(number);
    number = Number(prompt("Enter number or stop prompts by entering zero"));
}

Array.sort((a,b)=>b-a);
console.log(Array);