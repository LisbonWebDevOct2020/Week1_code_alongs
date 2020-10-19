// Filter returns a new array, based in a condition
// Only returns the items that pass the condition

let numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});

console.log(numbers);
console.log(evenNumbers);

let names = ['joao', 'jack', 'salome', 'francisco'];
let newNames = names.filter((name) => {
    return name.length < 9;
});
console.log(newNames);

let moreNames = ['luis', 'alicia', 'rodrigo', 'margarida', 'abe'];
//using filter return a new array without 'rodrigo'
let newMoreNames = moreNames.filter((name) => {
    return name !== 'rodrigo'
});
console.log(newMoreNames);

let people = [
    { name: 'Allen', age: 49},
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 }
]
//1. Filter out people that are not old enough to drink
let drink = people.filter((person) => {
    return person.age > 18 && person.name === 'Alen';
});

console.log(drink)

let mappedDrink = drink.map((person) => {
   return person.name;
});

console.log(mappedDrink);

