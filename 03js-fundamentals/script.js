'use strict';

console.log("======START=========")

/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("i can drive");
*/
/*
function func(number)
{
    console.log(`fuck off ${number} times`);
}

func(50);
 */

/*CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! 
There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores 
is calculated (so one average score per team).

A team only wins if it has at least double the average score of the 
other team. Otherwise, no team wins!

Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores.
This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the 
value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as 
parameters (avgDolphins and avgKoalas), and then logs the winner to the console, 
together with the victory points, according to the rule above. Example: Koalas win 
(30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/
/*
const averageScore = (a, b, c) => (a + b + c)/3;

const scoreDolphins = averageScore(44,23,71);
const scoreKoalas = averageScore(85,54,41);
console.log(`score 1 ${scoreDolphins}`);
console.log(`score 2 ${scoreKoalas}`);

function checkWinner(avgDolphins, avgKoalas)
{
    if(avgDolphins > avgKoalas)
    {
        console.log(`Dolphins win (${avgDolphins} : ${avgKoalas})`);
    }
    else if(avgDolphins < avgKoalas)
    {
        console.log(`Koalas win (${avgKoalas} : ${avgDolphins})`);
    }
    else
        console.log("No team wins...");
}

checkWinner(scoreDolphins, scoreKoalas);

*/
/*
const arr1 = [1,2,3,4,5];
console.log(arr1);

const arr2 = new Array(6,7,8,9,"sdfsd");
console.log(arr2);

let result = arr2[1] + arr2[3];
console.log(`result of ${arr2[1]} and ${arr2[3]} is ${result}`);
console.log(typeof(arr2[0]));
console.log(typeof(arr2[4]));
arr2.unshift("unshifted");
console.log(arr2);
*/

/*
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as 
before — tip 15% of the bill if the bill value is between 50 and 300, and 
if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
    the code from the first tip calculator challenge if you need to). Use the 
    function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test 
data below.

Create an array called tips containing the tip value for each bill, calculated 
from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/
/*
let bill = 275;
const tip = bill < 40 && bill > 300 ? 0.20 * bill : 0.15 * bill; 

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip+bill}.`);
console.log("zkouska");
*/

/*
//object literal
const person = {
    firstName: "Roman",
    lastName: "Kralicek",
    age: 34,
    friends: ["Bob", "Piskot"],

    birthYear: function(todayYear)
    {
        return todayYear - this.age;
    }

};

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person["lastName"]); //wtf??? extremely useful!!!!
console.log(person.friends);

const friend = "friends[0]";

console.log(person.birthYear(2023));
// const choose = prompt("firstName or lastName");

// console.log(person[choose]);
// console.log(person.friends[0]);
console.log(person['friends'][1]);

*/

/*
CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: 
BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:
For each of them, create an object with properties for their full name, 
mass, and height (Mark Miller and John Smith). Name these objects as mark 
and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method 
on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    bmi: 0,
    calcBMI: function()
    {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
    
};
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    bmi: 0,
    calcBMI: function()
    {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};

console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`)


console.log("======FINISH========")
