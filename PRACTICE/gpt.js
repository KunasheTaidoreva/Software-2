"user strict";

let subject=prompt("Enter your subject");

switch(subject){
    case"m":
    console.log("Mathematics");
    break;

    case"p":
    console.log("Physics")
    break;

    case"c":
    console.log("Computer Science");
    break;

    default:
        console.log("Unkown subject");
}