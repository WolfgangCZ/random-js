'use strict';

console.log("======START=========");

let newStart = true;
let endGame = false;
let randomNumber;
let score = 20;
let highScore = 0;
//check is number is inputted??? what is this word
document.querySelector(".check")
.addEventListener("click", function(){
let guess = document.querySelector(".guess").value;
    if(newStart && !endGame)
    {
        randomNumber =  Math.floor(Math.random()*20);
        newStart = false;
    }
    if(!endGame)
    {

        //document.querySelector(".number").textContent = randomNumber;
        guess = Number(guess);
        if(!guess)
        {
            document.querySelector(".message").textContent = "No number";
        }
        console.log(guess);
        
        if(guess > randomNumber) 
        {
            document.querySelector(".message").textContent = "Wrooong! Too high";
        }
        else if(guess < randomNumber)
        {
            document.querySelector(".message").textContent = "Wrooong! Too low";
        }
        else
        {
            document.querySelector(".message").textContent = "Nice! you guessed it correctly";
            document.querySelector(".number").textContent = randomNumber;
            if(highScore < score) highScore = score; 
            document.querySelector(".highscore").textContent = highScore;
            document.body.style.backgroundColor = "green";
            endGame = true;
            return;
        }
        score -= 1;
        document.querySelector(".score").textContent = String(score); 
        if(score === 0)
        {
            document.querySelector(".message").textContent = "FAIL";
            document.body.style.backgroundColor = "red";
            endGame = true;
        }
    }
});

document.querySelector(".again")
.addEventListener("click", function(){
    newStart = true;
    endGame = false;
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = '';
    document.body.style.backgroundColor = "#222";
});




//again button resets game - not the high score
//set the score to 20
//input the number
//check the number
//tell if its higher correct or lower
//when guessing incorectly decrement by 1
//when guessing correctly screen goes green and 17 is showed


console.log("======FINISH========");
