console.log("Hello")
let elem = document.createElement("div");
elem.setAttribute("id","elemid")
elem.setAttribute("class","elemclass")
elem.setAttribute("style",'border:2px solid black; width: 154px; margin: 34px; padding:23px;')
let val = localStorage.getItem("text")
let text;
if(localStorage.length == null){
    text = document.createTextNode("This is an editable div")
}
else{
    text = document.createTextNode(val);
}
elem.appendChild(text);
let parent = document.querySelector("#p");
let child1 = document.querySelector("#c1");
parent.insertBefore(elem,child1);

elem.addEventListener('click',function(){
    let noofTextAreas = document.getElementsByClassName("textarea").length;
    if(noofTextAreas == 0){
        let html = elem.innerHTML;
        elem.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3">${html}</textarea>`;
    }
    let trarea = document.getElementsById("textarea");
    trarea.addEventListener('blur',function(){
        elem.innerHTML = trarea.value;
        localStorage.setItem("text",trarea.value)
    })
})



