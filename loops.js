//for (let i = 1; i <= 10; i++) {
//    console.log(i);
//}

let arr = [2,3,4,5,2,7];
arr.forEach(function(a){
    console.log(a);
})

let ob = {
    name : "Pratham",
    class : 2,
    branch : "Computer"
}
for(let key in ob){
    console.log(`${key} and its value is ${ob[key]}`);
}