




function getComputerChoice()
{
    let rngVal = Math.floor(Math.random() * 3) + 1;
    if(rngVal == 1)
    {
        return "rock";
    }
    else if(rngVal == 2)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

let playerChoice = toLowerCase(prompt("Enter rock, paper, or scissors:"));
let compChoice = getComputerChoice();
let results;
console.log(compChoice);

function playRound(playerSelection, computerSelection)
{
   if(playerSelection == "rock")
   {
    if(computerSelection == "rock")
    {
        results = "Draw!"
    }
    else if(playerSelection == "rock" && computerSelection == "paper")
    {
        results = "You Lose!"
    } 
    else if(playerSelection == "rock" && computerSelection == "scissors")
     {
         results = "You Win!"
     }
   
}