

console.log("========================");
console.log("========START===========");
console.log("========================");
/*

let test1  = 100;
console.log(typeof test1);
test1 = "hovno";
console.log(typeof null);
console.log("========================");

var test2 = 100;

const birth = 100;
birth = 10;
console.log(birth);

*/

/*
CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark 
has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

👋 OPTIONAL: You can watch my solution in video format in the next lecture

IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly 
this formula mass / (height * height), and not this one mass / (height ** 2).
*/
/*
const massMark = 1;
const heightMark = 1;
const massJohn = 2;
const heightJohn = 2;

let BMIMark = massMark / (heightMark*heightMark);
let BMIJohn = massJohn / (heightJohn*heightJohn);

console.log(BMIMark);
console.log(BMIJohn);
*/
/*
const firstName = "Roman";
const job = "engineer";
const birthYear = 1988;

const info = firstName + " " + job + " " + birthYear;
console.log(info);

const info2 = `Im ${firstName}, an ${job}, Im ${birthYear} years old`;
console.log(info2);

console.log("string with \nnew line");

console.log(`fasdfsa
asdfsadf
asfdsdf

sadf

asdf
`);

*/

/*
CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, telling the user who has the higher BMI. 
The message can be either:
"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
2. Modify the outputs above to use template literals to include the BMI values in the outputs.
Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher
than Mark's (27)!".
Note: Don't round the BMI values. Leave them as they are.
👋 OPTIONAL: You can watch my solution in video format in the next lecture
IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


let BMIMark = massMark / (heightMark*heightMark);
let BMIJohn = massJohn / (heightJohn*heightJohn);

if(BMIJohn > BMIMark)
{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
else
{
    console.log(`Mark's (${BMIMark}) BMI is higher than John's (${BMIJohn})`);
}

*/
/*
const money = '';

if(money)
{
    console.log("True");
}
else
{
    console.log("False");
}
*/
/*
const age = 10;

console.log(age === "10"); //false
console.log(age === 10); //true 

prompt("whats your favorite number");
*/
/*
CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. 
They compete against each other 3 times. The winner with 
the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test 
data included below. The average score for Dolphins should be 
assigned to the scoreDolphins variable, and the average score of 
Koalas should be assigned to the scoreKoalas variable.
2. Compare the team's average scores to determine the winner 
of the competition, and print to the console:
"Dolphins win the trophy" if Dolphins win, or
"Koalas win the trophy" if Koalas win, or
"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
👋 OPTIONAL: You can watch my solution in video format in the next lecture
*/
/*
const dolphins = (96 + 108 + 89)/3;
const koalas = (88 + 97 + 110)/3;

if(dolphins === koalas)
{
    console.log("Both win the trophy");
}
else if(koalas < dolphins)
{
    console.log("Dolphins win the trophy");
}
else
{
    console.log("Koalas win the trophy");
}
*/
/*
switch(453)
{
    case 1:
        console.log("case 1");
        break;
    case 2:
        console.log("case 2");
        break;
    default:
        console.log("default");
}
*/

const age = 8;
age >= 18 ? console.log("over 18") : console.log("under 18");

