let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");







const genComputerChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx =  Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText ="Game is Draw";
    msg.style.backgroundColor  = "#081b31";
}

const showWinner= (userWin , userChoice , compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText =`You win! Yours ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you loose");
        msg.innerText =`You loose! computer ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice);
    // generate computer choice
    const compChoice = genComputerChoice();
    console.log("computer choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        userWin = true;
        if(userChoice==="rock"){
             userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice === "scissors" ? false : true;
       }
       else if(userChoice==="scissors"){
        userWin = compChoice === "rock" ? false : true;
   }
   showWinner(userWin , userChoice , compChoice);
    }

}


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});



