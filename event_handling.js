/*
Types of events in Javascript
1. click
2. dblclick
3. mouseleave
4. mouseenter
5. mousedown
6. mousemove
*/

/*
document.getElementById("c4").addEventListener('click',function(e){
    console.log("Child 4 is clicked");
    console.log(e);
    location.href = "//codewithharry.com"
    let variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable);
})
*/

/*
document.getElementById("heading").addEventListener('mouseover',function(e){
    console.log("Heading is clicked");
    console.log(e);
})
*/

/*
let btn = document.querySelector("#btn");
btn.addEventListener('click',mouseClick)
btn.addEventListener("dblclick",doubleClickMouse);
btn.addEventListener('mousedown',mouseDownFunction); //if any button of mouse is clicked mousedown event is fired

function mouseClick(e){
    console.log("Thanks for clicking the button");
    e.preventDefault(); //function used to prevent the submission of form
}

function doubleClickMouse(e){
    console.log("Thanks for double clicking the button");
}

function mouseDownFunction(e){
    console.log("Thanks for using mousedown event");
}
*/

// document.querySelector(".list").addEventListener('mouseleave',function(){
//     console.log("Mouse is leaved")
// })
// document.querySelector(".list").addEventListener('mouseenter',function(){
//     console.log("Mouse is entered")
// })


document.querySelector(".container").addEventListener('mousemove',function(e){
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},${e.offsetX})`;
    console.log("Mouse is move")
})