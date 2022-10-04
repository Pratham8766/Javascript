// function tt(no){
//     return no;
// }
// n = "Pratham"
// let z = tt(n);
// console.log(z);


// function greeting(name,phone = "8766934125"){
//     return `My name is ${name} and phone no is ${phone}`
// }

// let greet = greeting("Pratham");
// console.log(greet);



// const marks = function(n,i){
//     return n+i;
// }
// let m = marks(10,20);
// console.log(`Total marks are ${m}`);


// let myObject = {
//     name : "Pratham",
//     year : "2",
//     branch : "computer"
// }

// function it(ob){
//     for(let key in ob){
//         console.log(`The ${key} for object is ${ob[key]}`);
//     }
// }

// it(myObject);



let myOb = {
    name : "Pratham",
    game : function(){
        return "Valorant";
    }
}

console.log("The game is ", myOb.game());