let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msgContainer = document.querySelector(".msg-container");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");
const msg = document.querySelector("#msg");


choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        userChoice =choice.getAttribute("id");
        playGame(userChoice);
    })
})

const generateComputerChoice = () =>{
    let options = ["rock", "paper", "scissors"]
    let computerChoice = Math.floor(Math.random()*3)
    return options[computerChoice]
}

const showWinner = (userWin, userChoice, computerChoice) =>{
    if(userWin){
        msg.innerText = `You win! Your choice ${userChoice} beats ${computerChoice}`;
        msgContainer.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else {
        msg.innerText = `You lose! Computer choice ${computerChoice} beats ${userChoice}`;
        msgContainer.style.backgroundColor = "red";
        computerScore++;
        computerScorePara.innerText = computerScore;
    }
}

const drawGame = () =>{
    msg.innerText = "It's a draw!";
    msgContainer.style.backgroundColor = "blue";
}

const playGame= ((userChoice)=>{
    const computerChoice = generateComputerChoice();
    let userWin = false;
    if (computerChoice === userChoice){
        drawGame();
    }
    else{
        if(computerChoice === "rock"){
            userWin = userChoice === "paper" ? true : false
        }

        else if(computerChoice === "paper"){
            userWin = userChoice === "scissors" ? true : false
        }

        else if(computerChoice === "scissors"){
            userWin = userChoice === "rock" ? true : false
        }

        showWinner(userWin, userChoice, computerChoice);
    } 
    
})