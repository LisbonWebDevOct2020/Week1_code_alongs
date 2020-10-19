setTimeout(function() { //<- setTimout recieves an anonymous function
    // Do something
}, 1000);

function getLength(myString, counter) {
    counter(myString);
}
//const counter = function(myStringPassed){
//    console.log(myStringPassed.length);
//}
getLength('some string', function(myStringPassed){
    console.log(myStringPassed.length);
});