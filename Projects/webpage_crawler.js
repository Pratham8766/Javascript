let a = "python";
let links = document.links;
let href;
Array.from(links).forEach(function(element){
href = element.href;
if(href.includes(a)){
    console.log(href);
}
})
