let conditionOne = true;
let conditionTwo = false;

if (conditionOne === false) {
    console.log('condition is false');
} else {
    console.log('condition is true');
}

let goingOutTonight = false;

if (goingOutTonight === true) {
    console.log('Im happy');
} else {
    console.log('Im sad');
}

// Undefined
let myName; // <= variable declaration

console.log(myName);

if (myName === undefined) {
    console.log('that name is not defined yet');
} else {
    console.log(myName);
}

// Null
myName = "Miguel"; // <= variable assignment
console.log(myName);

myName = null;
console.log(myName);

if (myName === "Miguel") {
    console.log('I fell into a true condition statement');
} else {
    console.log('I fell into a false condition statement');
}

