const choices = document.querySelectorAll(".choice");

const playerChoiceText = document.getElementById("playerChoice");
const computerChoiceText = document.getElementById("computerChoice");
const winnerText = document.getElementById("winner");

const playerScoreText = document.getElementById("playerScore");
const computerScoreText = document.getElementById("computerScore");

const resetBtn = document.getElementById("reset");

let playerScore = 0;
let computerScore = 0;

const options = ["Rock", "Paper", "Scissors"];

choices.forEach(button => {

    button.addEventListener("click", () => {

        const playerChoice = button.dataset.choice;

        const randomIndex = Math.floor(Math.random() * 3);
        const computerChoice = options[randomIndex];

        playerChoiceText.textContent = playerChoice;
        computerChoiceText.textContent = computerChoice;

        let result = "";

        if(playerChoice === computerChoice){

            result = "It's a Draw!";

        }
        else if(

            (playerChoice === "Rock" && computerChoice === "Scissors") ||

            (playerChoice === "Paper" && computerChoice === "Rock") ||

            (playerChoice === "Scissors" && computerChoice === "Paper")

        ){

            result = "You Win!";
            playerScore++;

        }

        else{

            result = "Computer Wins!";
            computerScore++;

        }

        winnerText.textContent = result;

        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;

    });

});

resetBtn.addEventListener("click", ()=>{

    playerScore = 0;
    computerScore = 0;

    playerScoreText.textContent = 0;
    computerScoreText.textContent = 0;

    playerChoiceText.textContent = "-";
    computerChoiceText.textContent = "-";

    winnerText.textContent = "Choose an option!";

});