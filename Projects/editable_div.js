let parent = document.querySelector("#p")
let child1 = document.querySelector("#c1")

let newElement = document.createElement("div");
let text;
let val = localStorage.getItem("text");
if(localStorage.length == null){
    text = document.createTextNode("This is an editable div")
}
else{
    text = document.createTextNode(val);
}
newElement.appendChild(text);
newElement.setAttribute("id","newElemid");
newElement.setAttribute("class","newElemClass");
newElement.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');
parent.insertBefore(newElement, child1);
newElement.addEventListener('click',function(){
    let noofTextAreas = document.getElementsByClassName("textarea").length;
    if(noofTextAreas == 0){
        let html = newElement.innerHTML;
        newElement.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
        console.log(` <textarea class="textarea form-control" id="textarea" rows="3"></textarea>`)
    }
    let tarea = document.getElementById("textarea")
    tarea.addEventListener('blur',function(){
        newElement.innerHTML = tarea.value;
        localStorage.setItem('text',tarea.value);
    })
})