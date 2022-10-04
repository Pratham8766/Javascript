// Variables in javascript
// let,var,const
//var: Global scope
//let: Block level scope
//const: Global scope

//1.var
/*
var name = 'Pratham'; //Variable declaration and assigning value in js
var surname; //Variable declaration
surname = "Gajbhiye"  //assigning value
//Note: Variable declared and not assingned value will be given undefined in the console output
//Note: Variable can start with the $ sign in js
var rollno = 70;
console.log(name,surname,'and roll no is',rollno); //Printing the value pf the variable in js
*/

//2.const
/*
//Note: Value assigned to the const once cannot be changed  
const name = "Pratham"; 
console.log(name);
*/

//3.let
/*
//block level variable
{
    let name = "Pratham"
    console.log(name)
}
*/

//Arrays
//Array declared as const cannot be assigned once again but the values can be add inside the array
const arr = [10,20,45,321];
arr.push(26);
arr.push(35);
console.log(arr);