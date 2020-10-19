let myArray = [2, 10, 30, 54, 12];

/*for(let i = 0; i<myArray.length; i++) {
    console.log(myArray[i]);
}*/
myArray.forEach((element) => {
    console.log(element);
});
//1. create a an array of strings
//2. iterate through that array using a foreach and console 
// log each item
let arr = ['hello', 'Ola', 'Hej'];
arr.forEach((item) => console.log(item));
// with foreach you cannot use break;
// with foreach you cannot use continue;

//1. Create a foreach to sum the values of the following array:
let arrayToSum = [1, 2, 3, 4, 5];
let sum = 0;

let iterator = (item) => {
    sum += item; // same as sum = sum + item;
}
arrayToSum.forEach(iterator);

console.log(sum);