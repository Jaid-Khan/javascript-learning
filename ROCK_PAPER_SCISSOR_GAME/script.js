let userScore = 0; // Stores user score
let computerScore = 0; // Stores computer score

// Select all elements with class 'choice' (rock/paper/scissor containers)
const choices = document.querySelectorAll(".choice");

// Select elements to display game messages and scores
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const computerScorePara = document.querySelector("#computerScore");

// Function to randomly get computer's choice
const getCompChice = () => {
    const options = ["rock", "paper", "scissors"]; // Array of options
    const randIdx = Math.floor(Math.random() * 3); // Random index 0–2
    return options[randIdx]; // Return random choice
};

// Function to handle a draw scenario
const drawGame = () => {
    msg.innerText = "Game was Draw!"; // Update message
    msg.style.backgroundColor = "brown"; // Change background color
};

// Function to display winner and update score
const showWinner = (userWin) => {
    if (userWin) {
        userScore++; // Increment user score
        userScorePara.innerText = userScore; // Update on screen
        msg.innerText = "Your Win!"; // Show win message
        msg.style.backgroundColor = "green"; // Green for win
    } else {
        computerScore++; // Increment computer score
        computerScorePara.innerText = computerScore; // Update on screen
        msg.innerText = "Your Loose"; // Show lose message (typo: should be 'lose')
        msg.style.backgroundColor = "red"; // Red for loss
    }
};

// Main function to run the game logic
const playGame = (userChoice) => {
    const compChoice = getCompChice(); // Get computer's choice
    if (userChoice === compChoice) {
        drawGame(); // If both choose same, it's a draw
    } else {
        let userWin = true; // Assume user wins
        // Define logic for losing conditions
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin); // Show result based on win/loss
    }
};

// Add click event listeners to each choice (rock, paper, scissor)
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // Get ID of clicked choice
        playGame(userChoice); // Start game with user choice
    });
});
