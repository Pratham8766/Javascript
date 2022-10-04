let anchor = document.createElement("a");
anchor.href = "//codewithharry.com"
anchor.innerText = "Code With harry";
anchor.id = "aid"
anchor.className = "aid1"
// console.log(anchor);

let a = document.querySelector(".container");
a.appendChild(anchor);

console.log(anchor.getAttribute("id"))
console.log(anchor.getAttribute("class"))
