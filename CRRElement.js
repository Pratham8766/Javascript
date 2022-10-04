let element = document.createElement("div");
element.className = "list";
element.innerText = "Child 5";

//Adding the element to DOM
let JSul = document.querySelector("#myid");
JSul.appendChild(element);

//Replacing Element
let rElem = document.createElement("h3");
rElem.className = "UCH3";
rElem.innerText = "This is user created heading";
rElem.id = "tcv";
// console.log(rElem);
element.replaceWith(rElem);

//Replacing Child
let myul = document.querySelector("#myul");
// myul.replaceChild(rElem, document.querySelector("#luli"))

let ddiv = document.querySelector("#myul")
// ddiv.removeChild(document.querySelector("#Uuli"))

//Getting the attributes
//ID
let id = rElem.getAttribute("id");
console.log(id);

//Class
let c = rElem.getAttribute("class");
console.log(c);

let hAttribute = rElem.hasAttribute("href");
console.log(rElem.hasAttribute(hAttribute));