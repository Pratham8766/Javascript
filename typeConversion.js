//NUMBER TO STRING
let num = String(10);
// console.log("The type of data is",(typeof num))

let boolVar = String(true);
// console.log("The type of boolVar is",(typeof boolVar))

let dateVar = String(new Date());
// console.log("Todays date is",dateVar);
// console.log("The type of data is",(typeof dateVar));

let arr = String([1,2,3,4,5]);
// console.log("The length of array is",arr.length);
// console.log("The length of array when type casted to string is",arr.length);

//USING toString METHOD
let v = 12;
// console.log(v.toString());

//STRING TO NUMBER
let strVar = Number("12");
// console.log("The type of data is",(typeof strVar));

let floatVar = Number("123.223432");
let floaVar = parseFloat("123.223432");
console.log(floaVar);
console.log(floatVar.toFixed(3));

