"user strict";

let num1= Number(prompt("Enter the first number"));

let num2= Number(prompt("Enter the second number"));

let num3= Number(prompt("Enter the third number"));

let sum= document.querySelector("#s");

let product = document.querySelector("#p");

let avg = document.querySelector("#a");

total=num1+num2+num3;

pr=num1*num2*num3;

average= total/3;

sum.textContent="The total of the number you entered is "+total;
product.textContent="The product of the 3 integers is "+pr;
 avg.textContent="The average of the 3 numbers is "+average;