// create buttons for user to play game with event listener

// JQuery
const rock = $("<button>").addClass("rock").text("Rock").on("click", function() {
    playersMove('rock');});
const paper = $("<button>").addClass("paper").text("Paper").on("click", function() {
    playersMove('paper');});
const scissors = $("<button>").addClass("scissors").text("Scissors").on("click", function() {
    playersMove('scissors');});
const reset = $("<button>").addClass("reset").text("Reset Score");

// create container to store buttons & append button to body webpage
const buttonContainer = $("<div>").addClass("btn-container");
$(buttonContainer).append(rock, paper, scissors, reset);
$("body").append(buttonContainer);

// create container to store score results and append to body webpage
const resultsContainer = $("<div>").addClass("results-container");
$("body").append(resultsContainer);


// object to store baseline scores
const score = {
    wins: 0,
    losses: 0,
    ties: 0,
}

// crea
reset.on("click", function() {resetScore()});

function resetScore () {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    $(resultsContainer).text(`Your score: Wins: 0. Losses: 0. Ties: 0`)
}


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
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'lose';
        } else if (computerMove === 'paper') {
            result = 'win'
        } else if (computerMove === 'scissors') {
            result = 'tie';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'win';
        } else if (computerMove === 'paper') {
            result = 'tie'
        } else if (computerMove === 'scissors') {
            result = 'lose';
        }
        
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'tie';
        } else if (computerMove === 'paper') {
            result = 'lose'
        } else if (computerMove === 'scissors') {
            result = 'win';
        }
    }

    // if statements to add score results
    if (result === 'win') {
        score.wins += 1;
    } else if (result === 'tie') {
        score.ties += 1;
    } else if (result === 'lose') {
        score.losses += 1;
    }



     // alert results   
    $(resultsContainer).text(`You picked ${playerMove}. Computer picked ${computerMove}. You ${result}. Your score: Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`);
}
