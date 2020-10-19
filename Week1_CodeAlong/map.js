// Map returns a new array with a transformation

let myArray = [1, 2, 3, 4, 5];

let newArray = myArray.map((item) => item*2);

console.log(myArray);
console.log(newArray);

let names = ['james', 'gonçalo', 'mafalda', 'bernardo'];
//1. Use map to uppercase every item on the names array 
// 'joao'.toUpperCase() 'JOAO'
let upperNames = names.map((item) => {
    //console.log(index);
    return item.charAt(0).toUpperCase() + item.slice(1);
  
})
console.log(upperNames);
