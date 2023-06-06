function playerSelection() {
    const playerOption = prompt("Rock, Paper or Scissors?").toLowerCase();
    return playerOption;
}

function getComputerChoice() {
    const shapes = ["rock", "paper", "scissors"]; 
    const random = Math.floor(Math.random() * shapes.length);
    return shapes[random];
}

function round() {
    const computerChoice = getComputerChoice();
    const playerChoice = playerSelection();

    console.log(`The player selected: ${playerChoice}`);
    console.log(`The computer selected: ${computerChoice}`); 

    if (computerChoice === playerChoice){
        console.log("It is a tie!");
        return "It is a tie!";
    }

    else if (
    (computerChoice === "rock" && playerChoice === "scissors") ||
    (computerChoice === "scissors" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "rock")
    ) {
        console.log("Computer wins!");
        return "Computer wins!"
    }   

    else {
        console.log("Player wins!");
        return "Player wins!"
    }
}

function game(){
    let playerScore = 0
    let computerScore = 0
    
    for (let i = 0; i < 5; i++) {
        const score = round()
    if (score === "Computer wins!"){
        computerScore++;
    } 
    else if (score === "Player wins!"){
        playerScore++;
    }  
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    }

    if (playerScore > computerScore){
        console.log("Player win the game!");
    } else if (computerScore > playerScore){
        console.log("Computer win the game!")
    } else {
        console.log("It is a Tie!")
    }
}

game()
    