function getComputerChoice() {
    let n = Math.floor(Math.random()*3);
    if (n==0) {
        return "rock";
    }
    if (n==1) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    let num = parseInt(prompt("Enter 0 for rock, 1 for paper, 2 for scissors"));
    if (num==0) {
        return "rock";
    }
    if (num==1) {
        return "paper";
    }
    if (num==2) {
        return "scissors";
    }
    return getHumanChoice();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a tie!");
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock.");
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const human = getHumanChoice();
        const comp = getComputerChoice();

        playRound(human,comp);
    }
    console.log("GAME END")
}

playGame()
