const buttons = document.querySelectorAll("button");
const playerChoiceText = document.getElementById("playerChoice");
const compChoiceText = document.getElementById("compChoice");
const resultText = document.getElementById("result");
const humanScoreText = document.getElementById("human");
const computerScoreText = document.getElementById("computer");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const player = button.id;
        const computer = getComputerChoice();

        playerChoiceText.textContent = `You chose: ${capitalize(player)}`;
        compChoiceText.textContent = `Computer chose: ${capitalize(computer)}`;

        const outcome = getResult(player, computer);
        resultText.textContent = `Result: ${outcome}`;

        updateScores(outcome);
    });
});

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(player, computer){
    if(player === computer) return "It's a tie!";

    if(
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ){
        return "You win!";
    }
    else{
        return "You lose.";
    }
}

function updateScores(outcome){
    if(outcome === "You win!"){
        playerScore++;
    }
    else if(outcome === "You lose."){
        computerScore++;
    }

humanScoreText.textContent = `Your Score: ${playerScore}`;
computerScoreText.textContent = `Computer Score: ${computerScore}`;
}

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}
