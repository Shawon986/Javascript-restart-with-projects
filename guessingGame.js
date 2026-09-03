let gameNumber = 35;
let userInput = prompt("Guess a number between 1-40");

while(userInput != gameNumber){
    userInput = prompt("You gussed wrong, guess again");
}
console.log("Guess is right !!!");


//Have to run this code in browser console as prompt is not available in node.js environment.