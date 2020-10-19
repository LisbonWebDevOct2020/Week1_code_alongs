/* const age = 16;

// Conditionals
if (age <= 16) {
    console.log('you have a teenager discount');
} else if (age >= 65) {
    console.log('you have a senior citizen discount');
} else {
    console.log('sorry, you dont have any discount');
}

const numberOne = 4;
const numberTwo = 2;

if (numberOne === numberTwo) {
    console.log('The numbers are equal');
} else {
    if (numberOne > numberTwo) {
        console.log("number one is greater than number 2");
    } else {
        console.log("number one is smaller than number 2");
    }
}

// 1. Create a variable with an assigned value of a language, e.g. Spanish, French or Portuguese
// 2. Have an conditional that depending on the language, you will console log 
//hello world in the chosen language
// E.g. Spanish -> Hola, mundo!; French -> Bonjour, monde!; Portuguese -> Olá Mundo
const language = "Russian";

if (language === "Spanish") {
    console.log("Hola, mundo!");
} else if (language === "French") {
    console.log("Bonjour, monde!")
} else if (language === "Portuguese") {
    console.log("Olá, mundo!");
} else {
    console.log("Hello, world");
}


// Switch statement
const character = "Sansa";
let house = '';

switch(character) {
    case 'Khal Drogo': 
        house = 'Dothraki household';
    break;
    case 'Daenerys':
        house = 'Targaryan';
    break;
    case 'Jon Snow':
    case 'Arya':
    case 'Sansa':
        house = 'Stark house';
    break;
    default: 
        house = 'I have no idea';
}

console.log(`Your character belongs to house ${house}`);
*/

// Loops

// While statement

/* let iterator = 0;

while (iterator <= 30) {
    if (iterator === 10) {
        console.log('ten');
    } else if (iterator === 20) {
        console.log('twenty');
    } else {
        console.log(iterator);
    }
    //iterator = iterator + 1;
    iterator++;  
} */

// do { } while <= very rarely used

// for 

// write "ten" when iterator is 10, write "twenty" when iterator is 20
/*
for(let iterator = 0; iterator <= 30; iterator++) {
    if (iterator === 10) {
        console.log('ten');
    } else if (iterator === 20) {
        console.log('twenty');
    } else {
        console.log(iterator);
    }
}*/

// write "even" or "odd" depending if the number is even or odd - hint you need to use the % operator
/*for(let iterator = 0; iterator <= 30; iterator++) {
    if (iterator % 2 === 0) {
        console.log(`${iterator} is even`);
    } else {
        console.log(`${iterator} is odd`);
    }
}

// break - steps the execution outside the loop; 
for(let iterator = 0; iterator <= 30; iterator++) {
    if (iterator === 3) {
        break;
    }
    console.log(iterator);
}

// continue - steps over to the next iteration;
for(let iterator = 0; iterator <= 30; iterator++) {
    if (iterator === 3) {
        continue;
    }
    console.log(iterator);
}*/

const name = "John";

for (let i = 0; i<name.length; i++) {
    console.log(name[i]);
}

console.log('-----');

for (let i = name.length - 1; i >= 0; i--) {
    console.log(name[i]);
}















