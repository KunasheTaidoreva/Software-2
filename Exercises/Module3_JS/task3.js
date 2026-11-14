"user strict";

let names = [];

let count = 0;

while(count<6){
    let dog = prompt("Enter a dog name");
    names.push(dog);
    count++;
}

let orderList=names.sort();

let list= document.querySelector("#list");

for(let i=orderList.length-1; i>=0;i--){

    let li=document.createElement("li");

    li.textContent=orderList[i];

    list.appendChild(li);
}