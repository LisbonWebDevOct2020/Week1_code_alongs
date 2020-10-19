// Primitve Data types
// Number
// String
// Boolean
// Undefined
// Null

// Non-primitive
// Array
// Object

let myArray = [1, 2, 3, 'dasda', true];
let myObject = {
    key1: 'value',
    key2: 'value2',
    key3: 'value3'
};

let olympicRecords = {
    athletic100Men: 'Justin Gatlin',
    athleticLongJumpMen: 'Mike Powel'
}

let keyToRetrieve = 'athletic100Men';

// console.log(olympicRecords.athletic100Men);
// console.log(olympicRecords[keyToRetrieve]);

olympicRecords.swimming200Men = 'Michael Phelps';
olympicRecords['swimming300Women'] = 'Katie Ledecky';
olympicRecords.netflixMarathon = 'Miguel Braga'

// console.log(olympicRecords);

//1. Print the record for netflixMarathon
//console.log(olympicRecords.netflixMarathon);

//console.log('swimming100Men' in olympicRecords); // => true
//console.log('swimming1000Men' in olympicRecords); // => false

delete olympicRecords.netflixMarathon;

//console.log(olympicRecords);
//console.log(Object.keys(olympicRecords));

for(let key in olympicRecords) {
    // 'athletic100Men'
  //  console.log(olympicRecords[key]);
}

//1. Create a user object that has name and id (1, 2, 3, 4);

let user = {
    name: 'Alicia',
    id: 2
}

let user2 = {
    name: 'Miguel',
    id: 3
}

//2. Create a book object that has title, author and category
let book1 = {
    title: 'Harry Potter',
    author: 'J.K. Rolling',
    category: 'Fantasy'
}

let book2 = {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    category: 'Classic Literature'
}

//3. Relate books to the user
user.books = [book1, book2];

//console.log(user);
user.books[0].title = 'Jerry Potter';
//console.log(user);

let library = [];
library.push(user);
library.push(user2);
//4. Iterate through all the users (one user) - (for loop)
//5. Iterate through each user property - (for key in)

for(let i=0; i<library.length; i++) {
    //console.log(library[i]);
    let user = library[i];
    console.log(user.name);
    console.log(user.id);

    /*for(let key in user) {
        console.log(user[key]);
    }*/
}






