/*
Types of selectors 
1. Single element selectors
2. Multi element selectors
*/


// 1. Single element selectors
let docID = document.getElementById('myid');
// docID = docID.className;
// docID = docID.childNodes;
// docID = docID.parentNode;
// docID = docID.style.color = "cyan";
// docID.innerText = "Hello there";
// docID.innerHTML = "<b>This is really good</b>"
// console.log(docID);
// console.log(docID.innerText)


// let sel  = document.querySelector("#myid");
// let mel = document.querySelector(".container");
// mel = document.querySelector("body");
// console.log(sel);
// console.log(mel);




// 2. Multi element selectors
let mulEle = document.getElementsByClassName("ch");
mulEle = document.getElementsByClassName("container");
mulEle = document.getElementsByTagName("div")
console.log(mulEle)
// console.log(mulEle[0].getElementsByClassName("ch"))

//Iterating the html selector
Array.from(mulEle).forEach(function(element){
    element.style.color = "red";
    
})
