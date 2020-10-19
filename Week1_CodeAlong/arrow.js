//ES5 and before
/*const greeting = function(name) {
    return `Hello ${name}`;
}*/
//ES6 new syntax 
// Arrow function syntax
const greeting = name => `Hello ${name}`;
const helloWorld = () => 'Hello World';

let result = greeting('Ironhacker');
let result2 = helloWorld();
//console.log(result);
//console.log(result2);

const user = {
    name: 'ana'
}

const user2 = {
    name: 'sue'
}

function getAge() {
    console.log(this.age);
}

function getName() {
    console.log(`Hello ${this.name}`);
}

user.age = 20;
user2.age = 29;
user.getAge = getAge;
user2.getAge = getAge;
user.getName = getName;
user2.getName = getName;

user.getAge();
user2.getAge();
//1. create getName function and assign to both user and user2 objects
//2. print each object's name
user.getName();
user2.getName();