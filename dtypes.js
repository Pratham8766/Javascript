//Variables in Javascript


//PRIMITIVE DATATYPES
/*
// 1.String
let name = "Pratham";
console.log("My name is",name);
console.log("The datatype is",(typeof name));

// 2.Number
//Number can have any thing normal number as well as decimal  numbers
let marks = 19;
console.log("Marks obtained is",marks);
console.log("The datatype is",(typeof marks));

// 3.Boolean
let bVariable = true;
console.log("The value of the boolean variable is",bVariable);
console.log("The datatype is", (typeof bVariable));

// 4.Null
//We cannot print null variable
let nVar = null;
console.log("The datatype is", (typeof nVar)); //Datatype is object

// 5.Undefined
// let undefVar = undefined;
let undefVar;
console.log("The datatype is", (typeof undefVar));
*/


// REFERENCE DATATYPES

// 1.Array
//An array can contain any primitive datatypes
let myArr = [10,76,42,23,65, true, 'hello'];
console.log(myArr);
console.log("The datatype of array is",(typeof myArr));

// 2.Object literals
let myObject = {
    pratham: 67,
    harsh: 786,
    pushkar: 98
}
console.log(myObject);
console.log("The datatype of Object literals is",(typeof myObject));

// 3.Date
let date = new Date();
console.log("The datatype of date is",(typeof date))


// 4.Functions
function NHK() {

}
console.log("The datatype of function is",(typeof NHK))
