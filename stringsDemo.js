//Note: Strings are immutable



let name1 = "Pratham";
const greeting = "Good Morning";
// console.log(greeting + ' '+ name);

name1 = name1.concat(" ","Gajbhiye", " is a good boy");
// console.log(name1);

//STRING FUNCTIONS

// console.log("The length of name variable is "+(name1.length));
// console.log("To Lower Case is "+(name1.toLowerCase()));
// console.log("To Upper Case is "+(name1.toUpperCase()));
// console.log("To Lower Case is "+(name1.));
// console.log(name1[4]);
// console.log(name1.indexOf("th"));
// console.log(name1.indexOf("0")); //return -1 if character is not found 
// console.log(name1.lastIndexOf("a"));
// console.log(name1.charAt(3));
// console.log(name1.endsWith("ye"));
// console.log(name1.includes("Ga")); //return true if a particular pattern is found in a string
// console.log(name1.substring(0,5)); //returns o to n-1 substring as an output
// console.log(name1.slice(0,-4)) ;
// console.log(name1.split(" "));
// console.log(name1.replace("is" ,"are")) //replaces first occurence


//TEMPLATE LITERALS
let valoCharacter1 = "Reyna";
let valoCharacter2 = "Jett";
let names = `Hello valo Niggas
<p> Character 1 is ${valoCharacter1}</p>
<p> Character 2 is ${valoCharacter2}</p>
`;
document.body.innerHTML = names;