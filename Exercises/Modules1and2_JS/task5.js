"user strict";

let num = Number(prompt("Enter any year of your choice"));

let leapy = document.querySelector("#year");

if(num%4==0){
    leapy.textContent=(`${num} is a leap year`);
}

if(num%100==0 && num%400==0){
    leapy.textContent=(`${num} is a leap year`);
}
if (num%4!=0){
    leapy.textContent=(`${num} is not a leap year`);
}