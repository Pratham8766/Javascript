showNotes();
let addBtn = document.querySelector("#mybtn")

addBtn.addEventListener('click', function () {
    let tarea = document.querySelector("#text");
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(tarea.value)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    tarea.value = "";
    console.log(notesObj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    let noObj;
    if (notes == null) {
        noObj = [];
    } else {
        noObj = JSON.parse(notes)
    }
    let html = "";
    noObj.forEach(function (element, index) {
        html += `<div class="Card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id = button${index} onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`
    })

    let notesEln = document.querySelector("#notes");
    if (noObj.length != 0) {
        notesEln.innerHTML = html;
    } else {
        notesEln.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}
function deleteNote(index) {
    let tarea = document.querySelector("#text");
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
let search = document.querySelector("#searchTxt");
search.addEventListener("input",function(){
    let searchTxt = search.value.toLowerCase();
    let card = document.querySelector(".Card");
    console.log(searchTxt);
    Array.from(card).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(searchTxt)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})