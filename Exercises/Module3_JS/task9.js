"use strict";
let nums=[2,7,4];

function even(array){
    let Anew = [];
    for( let i=0;i<array.length;i++){
        if(array[i]%2==0){
            Anew.push(array[i]);
        }
    }
    return Anew;
    
}

console.log(nums);
console.log(even(nums));