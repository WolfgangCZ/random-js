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

console.log("======FINISH========")
