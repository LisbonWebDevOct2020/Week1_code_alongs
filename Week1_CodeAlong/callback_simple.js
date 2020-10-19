function eatDinner(dish, side, callback, callback2) {
    console.log('Eating dinner', dish, side);
    callback2();
    callback();
    
}

function eatDessert() {
    console.log('Eating dessert');
}

eatDinner('chichen', 'rice', eatDessert)