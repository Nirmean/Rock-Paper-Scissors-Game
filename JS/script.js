// create buttons for user to play game with event listener

// JQuery
const rock = $("<button>").addClass("rock").text("Rock");
const paper = $("<button>").addClass("paper").text("Paper");
const scissors = $("<button>").addClass("scissors").text("Scissors");
const reset = $("<button>").addClass("reset").text("Reset Score");
const buttonContainer = $("<div>").addClass("btn-container");
$(buttonContainer).append(rock, paper, scissors, reset);
$("body").append(buttonContainer);

// Vanilla Javascript
// const rock = document.createElement("button");
// rock.innerHTML = "rock";
// const paper = document.createElement("button");
// paper.innerHTML = "paper";
// const scissors = document.getElementById("scissors")
// scissors.innerHTML = "scissors";
// document.body.appendChild(rock);
// document.body.appendChild(paper);
// document.body.appendChild(scissors);

// function that creates the computers move
    // variable that creates a random number
    // empty variable that will store the future computer move
    // if statements that assign a value of 'rock, paper, scissors'
    // return the computers move

// playGame function that takes in player move and compares with computer
    // create a var that stores the computer move function
    // empty variable for the result
    // if statements that compare player move with computer move (for all positions)
    // alert results


// var that holds the score baseline
// var/button that resets scores to 0
