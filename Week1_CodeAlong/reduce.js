//Reduce reduces the array to one value
let numbers = ['1', '2', '3', '4'];

let result = numbers.reduce((accumlator, currentValue) => { //prev curr
    //console.log(accumlator, currentValue);
    return accumlator + currentValue;
});

let people = [
    { name: 'Allen', age: 49},
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 }
]

//use reduce to sum the people's age
let peopleAge = people.reduce((accumlator, currentValue) => {
    return accumlator + currentValue.age;
}, 0);

console.log(peopleAge);

//use reduce and filter to sum up the ages of people that are old enough
//to drink
let rightAge = people.filter((person) => {
    return person.age > 18;
}).reduce((accumlator, currentValue) => {
    return accumlator + currentValue.age;
}, 0);

console.log(rightAge);