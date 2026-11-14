"user strict";

let array =[];

for (let i=0; i<5; i++){
    let number= Number(prompt("Enter any integer"));
    array.push(number);
}

let newArray=[];
for(let n=array.length-1; n>=0; n--){
    newArray.push(array[n]);
    console.log(newArray);
}

let paragraph = document.querySelector("#order");

paragraph.textContent = newArray;
