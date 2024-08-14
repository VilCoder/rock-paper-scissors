// Try to run the program if no errors occur during its execution
try {
    function getComputerChoice() {
        // Generates a random number between 0 and 2
        const computerNumber = Math.floor(Math.random() * 3);
    
        // Evaluates the "computerNumber" value and returns an option based on the value
        const computerChoice = ["rock", "paper", "scissors"];
        
        return computerChoice[computerNumber];
    }
    
    function getHumanChoice() {
        // Captures the value entered by the user
        let humanChoice = prompt("Enter rock, paper or scissors").toLowerCase();
    
        // The loop is evaluated until the user enters one of the expected values
        while (true) {
            if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
                return humanChoice;
            }
    
            console.log("Please enter a valid value");
            humanChoice = prompt("Enter rock, paper or scissors").toLowerCase();
        }
    }
    
    
    // Evaluate and return the winner of the round
    function playRound (humanChoice, computerChoice) {
        if (
            (humanChoice === "rock" && computerChoice === "scissors") || 
            (humanChoice === "paper" && computerChoice === "rock") || 
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            return `You win! ${humanChoice} beats ${computerChoice}`;
        } else if (humanChoice === computerChoice) {
             return `Both draw`;
        } else {
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }
    }
    
    
    function playGame() {
        // Declaration of variables
        let humanScore = 0;
        let computerScore = 0;
        
        // Sets the game to 5 rounds
        for (let index = 0; index < 5; index++) {

            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
    
            console.log(`=============== Round ${index + 1} ===============`);
            if (playRound (humanSelection, computerSelection).startsWith("You win!")) {
                humanScore += 1;
                console.log( playRound(humanSelection, computerSelection) );
            } else  if (playRound (humanSelection, computerSelection).startsWith("You lose!")) {
                computerScore += 1;
                console.log( playRound(humanSelection, computerSelection) );
            } else {
                console.log( playRound(humanSelection, computerSelection) );
            }
    
            console.log( `Human ${humanScore} \nComputer ${computerScore}` );
        }
    
        // Evaluate and return who has won the game
        if (humanScore > computerScore) {
            return "You have won";
        } else if (humanScore < computerScore) {
            return "Yuo have lost";
        } else {
            return "Tied game";
        }
    }
    
    console.log( playGame() );
}
catch (e) { // Captures and throws possible errors during the execution of the program
    console.log(e);
}
