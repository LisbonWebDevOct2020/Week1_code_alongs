// Array
const arrayNames = ['Pedro', 'Jake', 'Joan', 'Mike'];
const anotherArray = ['Pedro', 2, true];
//console.log(anotherArray[0]);
//console.log(anotherArray[2]);
let thisVariableWillEventuallyChangeItsValue;
const iDontWantThisVariableToChangeItsValue = "Celsius";

arrayNames.push('Francisco');
//console.log(arrayNames);

arrayNames.unshift('Rachel');
//console.log(arrayNames);

arrayNames.splice(0, 1);
//console.log(arrayNames);

for(let iterator = 0; iterator<anotherArray.length; iterator++) {
   // console.log(iterator);
    console.log(anotherArray[iterator]);
}

anotherArray.forEach(function(element) {
    console.log(element);
});

const numbers = [1, 2, 3, 4, 5, 6];

//1. Use foreach to iterate through the array and console.log each array
// element multiplied by 2.
numbers.forEach(function(element) {
    console.log(element * 2);
});

let phrase = 'This is a phrase';
let words = phrase.split(' ');
console.log(words);
console.log(words[1]);







