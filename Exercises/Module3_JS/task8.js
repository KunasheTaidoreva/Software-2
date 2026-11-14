"user strict";

function concat(list){
    let word="";
    for(let i=0;i<list.length;i++){
        word = word+list[i];
    }
    return word;
}

words=["Kunashe","is","trying","his","best"];

let paragraph = document.querySelector("#ice");

x= concat(words);

paragraph.textContent=x;