//Local storage 

// localStorage.setItem("Name","Pratham")
// localStorage.setItem("Branch","Computer")
// localStorage.setItem("Year","3")


//getting the item from local storage
// let name = localStorage.getItem("Name");
// let branch = localStorage.getItem("Branch");
// let year = localStorage.getItem("Year");

//removing item from local storage
// localStorage.removeItem("Year");

// console.log("The name of student is",name);
// console.log("The branch of student is",branch);
// console.log("The year of the student is",year);

// localStorage.clear();

//To store the array in the key value pair we use JSON stringify();
// let favFood = ['Aloo','Paneer','Kofta'];
// localStorage.setItem("Name","Pratham");
// localStorage.setItem("Favorite_food",JSON.stringify(favFood));

//To get the value of array stored in local storage we use JSON.parse();
// let f = JSON.parse(localStorage.getItem('Favorite_food'));
// console.log(f);






//Session Storage
sessionStorage.setItem("shopName","saloon");
sessionStorage.setItem("address","saloni colony");
sessionStorage.setItem("price",18);

sessionStorage.removeItem("address");

console.log(sessionStorage.getItem("shopName"))
console.log(sessionStorage.getItem("address"))
console.log(sessionStorage.getItem("price"))
