// create buttons for user to play game with event listener

// JQuery
const rock = $("<button>").addClass("rock").text("Rock").on("click", playersMove('rock'));
const paper = $("<button>").addClass("paper").text("Paper").on("click", playersMove('paper'));
const scissors = $("<button>").addClass("scissors").text("Scissors").on("click", playersMove('scissors'));
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

function pickComputerMove() {
     // variable that creates a random number
    const randomNumber = Math.random();
     // empty variable that will store the future computer move
    let computerMove = '';
     // if statements that assign a value of 'rock, paper, scissors'
    if (randomNumber >= 0 && randomNumber <= 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
        computerMove = 'scissors';
    }
     // return the computers move
    return computerMove;
}

// playGame function that takes in player move and compares with computer

function playersMove(playerMove) {
    // create a var that stores the computer move function
    const computerMove = pickComputerMove();
    // empty variable for the result
    let result = '';

    // if statements that compare player move with computer move (for all positions)
    if (playerMove === rock) {
        result = 'tie';
    }
     // alert results   
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.`);
}


// var that holds the score baseline
// var/button that resets scores to 0