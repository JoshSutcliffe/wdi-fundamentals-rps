////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput(); /* This is how Phil simplified my code from my work in the below function, need to check that
    both are correct */
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = x; 
    return move = x || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === "rock" && computerMove === "scissors") {
        result = "playerWins";
}   else if (playerMove === "paper" && computerMove === "rock") {
        result = "playerWins";
}   else if (playerMove === "scissors" && computerMove === "paper") {
        result = "playerWins";
}   else if (computerMove === "rock" && playerMove === 'Scissors') {
        result = "computerWins";
}    else if (computerMove === "Paper" && playerMove === 'Rock') {
        result = "computerWins";   
}   else if (computerMove === "rock" && playerMove === 'Scissors') {
        result = "computerWins";
}    else if (computerMove === "rock" && playerMove === 'rock') {
        result = "tie";
}    else if (computerMove === "scissors" && playerMove === 'Scissors') {
        result = "tie";
}   else if (computerMove === "paper" && playerMove === 'paper') {    
        result = "tie";
}
    return winner;
}
/* above section is the homework from section 4. don't think this is the loop
that the rest of the section was describing, so need to check that. Also, no idea
what's going on with the return, so need to do that as well. */

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

