'use strict'

console.log("=========START==============");
/*
const oneWord = function(str)
{
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str)
{
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function(str, fn)
{
    console.log(`Original string ${str}`);
    console.log(`Transformed string ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascript is the best', oneWord);
*/
/*
const greet = function(greeting)
{
    return function(name)
    {
        console.log(`${greeting} ${name}`);
    }
}

const greetHey = greet("Hey")
greetHey("Roman");
*/
/*
const lufthansa = {
    airline: "Lufthansa",
    dataCode: "LH",
    bookings: [],
    book(flightNumber, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.dataCode}${flightNumber}`);
        this.bookings.push({flight: `${this.dataCode}${flightNumber}`, name});
    },
}

lufthansa.book(12345, "Roman");
lufthansa.book(6789, "Pepa");
console.log(lufthansa);

const eurowings = {
    airline: "Eurowings",
    dataCode: "EW",
    bookings: [],
}

const book = lufthansa.book;
//book(23, "Emil"); //doesnt work cause "this" doesnt longer point at the object lufthansa
//call method
book.call(eurowings, "23", "Lenka")
console.log(eurowings);
//apply method
const flightData = [5283, "Honza"];
book.apply(eurowings, flightData);
//bind method

const bookEW = book.bind(eurowings);
bookEW("15", "Karel");
console.log(eurowings);
*/

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, 
and an array with the number of replies for each option. This data is 
stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. 
  The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option 
  is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the 
  input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a 
string as an input (called 'type'), which can be either 'string' or 'array'. If type is 
'array', simply display the results array as it is, using console.log(). This should be 
the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both 
the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what 
shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/


/*
A poll has a question, an array of options from which people can choose, 
and an array with the number of replies for each option. This data is 
stored in the starter object below.
*/
/*
function spreadArr(arr)
{
    let result = '';
    for(const item in arr)
    {
        result += `\n${item} : ${arr[item]}`;
    }
    return result;
}

const poll = {
    question: "What is you favourite programming langauge?",
    options: ["JavaScript", "Python", "Rust", "C++"],
    answers: new Array(4).fill(0),
    */
/*
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. 
  The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
*/
/*
    registerNewAnswer()
    {
        const chosenOption = Number(prompt(`${this.question}\n ${this.options}\n (Write option number)`));
        if(isNaN(chosenOption)) console.log("THIS IS NOT A NUMBER DICK");
        else if(chosenOption < 0 || chosenOption > this.options.length-1) console.log("THATS NOT ONE OF THE OPTION DICK");
        else this.answers[chosenOption]++;
        console.log(this.answers);
    },
    displayResults(type = "string")
    {

    }
} //END OF OBJECT

//2. Call this method whenever the user clicks the "Answer poll" button.

const button = document.getElementById('btn');
const registerNumber = poll.registerNewAnswer.bind(poll)
button.addEventListener('click', registerNumber);
*/
/*
3. Create a method 'displayResults' which displays the poll results. 
The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. 
If type is 'array', simply display the results array as it is, using console.log(). 
This should be the default option. If type is 'string', display a string like "Poll results 
are 13, 2, 4, 1". 
*/
/*
(()=>{
    console.log("hello world")
})();

(()=>{})(); //?????????
*/

//CLOSURES
const secureBooking = function(){
    let passengerCount = 0;
    return function()
    {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();
booker();
booker();
booker();
booker();
booker();

console.log("========FINISH==========");

