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
    return move || getInput(); 
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`. 
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
}   else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
}   else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
}   else if (computerMove === "rock" && playerMove === 'Scissors') {
        winner = "computer";
}    else if (computerMove === "Paper" && playerMove === 'Rock') {
        winner = "computer";   
}   else if (computerMove === "rock" && playerMove === 'Scissors') {
        winner = "computer";
}    else if (computerMove === "rock" && playerMove === 'rock') {
        winner = "tie";
}    else if (computerMove === "scissors" && playerMove === 'Scissors') {
        winner = "tie";
}   else if (computerMove === "paper" && playerMove === 'paper') {    
        winner = "tie";
}
    return winner;
}
/* above section is the homework from section 4. don't think this is the loop
that the rest of the section was describing, so need to check that. Also, no idea
what's going on with the return, so need to do that as well. */

// This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */

function letsPlay() {
    var playersMove = getPlayerMove();
    var computersMove = getComputerMove();
    var thisGamesWinner = getWinner(playersMove, computersMove);
    console.log(thisGamesWinner);

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
        if (playerWins === 5) {
            console.log("Congrats, you have beaten the evil bot!")
        } else if (computerWins === 5){
            console.log("Drats, the evil bot has foiled your plans once again!")
        }
    return [playerWins, computerWins];
}

