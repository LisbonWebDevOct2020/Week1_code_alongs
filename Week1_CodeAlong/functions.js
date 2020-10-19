// DRY Don't repeat yourself

/*function <name> (<parameteres>) {
    <instructions>

    [return statement]
}*/

// Function declaration
function sayHelloMary() {
    console.log('Hello Mary!');
};

function sayHelloJohn() {
    console.log('Hello John!');
};

// Function expression
let sayHelloTwo = function() {
    console.log('Hello there!, again');
};

// Function invokation
//sayHelloTwo();

function sayHello(name) {
    console.log(`Hello ${name}`);
}

sayHello('John');

sayHelloMary();
sayHelloJohn();

sayHello('Jake');
sayHello('Joana');
sayHello('Francisco');


function sayHelloToClassmates(classmate1, classmate2, classmate3) {
    console.log(`Hello ${classmate1}, ${classmate2}, ${classmate3}`);
}

// sayHelloToClassmates('Jake', 'Joana', 'Francisco');

function multiplyByTwo(number) {
    return number * 2;
}

let result = multiplyByTwo(4);
// console.log(result);

//1. Create a function that accepts 3 numbers as parameters and
// returns their sum
function sumParams(numberOne, numberTwo, numberThree) {
    return numberOne + numberTwo + numberThree;
}

let sumResult = sumParams(4, 5, 6);
// console.log(sumResult);

// function to calculate the average of an array
function avg(array) {
    //initialize sum variable to zero
    let sum = 0;

    //iterates through every element of the array
    for (let i = 0; i<array.length; i++) {
        //sums array value to sum variable
        sum = sum + array[i];
    }

    // returns total sum divided by the array's length
    return sum / array.length;
}

// invoke the avg function and console.log the result
let myArray = [1, 2, 3, 4];
let avgResult = avg(myArray);
// console.log(avgResult);
// console.log(avg(myArray));

function sum(array) {
  //initialize sum variable to zero
  let sum = 0;

  //iterates through every element of the array
  for (let i = 0; i<array.length; i++) {
      //sums array value to sum variable
      sum = sum + array[i];
  }
  return sum;
}

function average(array) {
    // check if the array's length is more than 0
    // if it's not, I just want to return a message
    if (!array.length) {
        return 'The array is empty';
    }

    return sum(array) / array.length;
}

result = average([1, 2, 3, 4]);
console.log(result);










