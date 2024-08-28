try { // Try  to run the program if no errors occur during its execution
    function getComputerChoice() {
        // Generates a random number between 0 and 2
        const computerNumber = Math.floor(Math.random() * 3);

        const computerChoice = ["rock", "paper", "scissors"];
        
        return computerChoice[computerNumber];
    }
    
    function playRound (humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors") {
            return `You win! ${humanChoice} beats ${computerChoice}`;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            return `You win! ${humanChoice} beats ${computerChoice}`;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            return `You win! ${humanChoice} beats ${computerChoice}`;
        } else if (humanChoice === computerChoice) {
             return `It's a tie`;
        } else {
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }
    }    
    
    let humanScore = 0;
    let computerScore = 0;

    // Selects all <buttons> elements in the document
    const btnSelection = document.querySelectorAll("button");
    btnSelection.forEach((selection) => {
        selection.addEventListener("click", () => { // Add a "click" event to each button
            // Gets the player selection based on the id of the button that was clicked
            const playerSelection = selection.id;

            const computerSelection = getComputerChoice();
            const playerScore = document.querySelector(".player-score");
            const npcScore = document.querySelector(".computer-score");
            const showWinner = document.querySelector(".show-winner");

            // Check the result of the round and update the score and message on the screen
            if (playRound (playerSelection, computerSelection).startsWith("You win")) {
                humanScore += 1;
                showWinner.textContent = playRound(playerSelection, computerSelection);
            } else  if (playRound (playerSelection, computerSelection).startsWith("You lose")) {
                computerScore += 1;
                showWinner.textContent = playRound(playerSelection, computerSelection);
            } else {
                showWinner.textContent = playRound(playerSelection, computerSelection);
            }
            
            playerScore.textContent = `YOU ${humanScore}`;
            npcScore.textContent = `${computerScore} NPC`;
            showWinner.style.background = "transparent";
    
            if (humanScore === 5) {
                showWinner.textContent = "You have won the game";
                showWinner.style.background = "#309EFF";
                humanScore = 0;
                computerScore = 0;
            }

            if (computerScore === 5) {
                showWinner.textContent =  "You have lost the game";
                showWinner.style.background = "#3A2727";
                humanScore = 0;
                computerScore = 0;
            }
        });
    });
}
catch (e) { // Captures en throws possibles errors during the execution of the program
    console.log(e);
}
