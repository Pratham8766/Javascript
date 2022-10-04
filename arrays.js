//Note: Arrays are mutable


//ARRAY DECLARATION
let myValoCharacters = ["Reyna", "Jett", "Phoenix", "Neon", "KillJoy"];
let myNum = [10, 20, 30, 40, 50, 60, 70];
let myMixed = [100, 200, 300, "Kayo", "Omen"];

//USING CONSTRUCTOR
let myArr = new Array(15, 30, 45, 60, 75, 90);

//ARRAY ATTRIBUTES AND FUNCTIONS

// console.log(myValoCharacters[1]);
// console.log(myNum.length);
// console.log(Array.isArray(myMixed));
// console.log(myNum.indexOf(30));

// myArr.push(60); //Adding element to the end of an array
// myArr.pop(); //Deleting element from the end of an array
// myArr.unshift(10); //Adding the element to the start of the array
// myArr.shift(); //Deleting the element from the start of the array
// myArr.splice(1,2); //Deletes the element from index 1 to index 2 from array
// myArr.reverse(); //Reversing the array
// myArr = myArr.concat(myNum); //Concatenating the Two Arrays
console.log(myArr);


let a = [40,50,60];
a.forEach(function(ab){
    console.log(ab)
})