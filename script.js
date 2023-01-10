




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

let playerChoiceSensitive = prompt("Enter rock, paper, or scissors:");
let playerChoiceInsensitive = playerChoiceSensitive.toLowerCase();
let compChoice = getComputerChoice();
let results = "Error - try again.";
console.log(playerChoiceInsensitive);

function playRound(playerSelection, computerSelection)
{
   if(playerSelection == "rock")
   {
    if(computerSelection == "rock")
    {
        console.log("Computer chose rock...")
        results = "Draw!"
    }
    else if(computerSelection == "paper")
    {
        console.log("Computer chose paper...")
        results = "You Lose!"
    } 
    else if(computerSelection == "scissors")
     {
        console.log("Computer chose scissors...")
         results = "You Win!"
     }
    }
    
    if(playerSelection == "paper")
    {
     if(computerSelection == "rock")
     {
        console.log("Computer chose rock...")
         results = "You Win!"
     }
     else if(computerSelection == "paper")
     {
        console.log("Computer chose paper...")
         results = "Draw!"
     } 
     else if(computerSelection == "scissors")
      {
        console.log("Computer chose scissors...")
          results = "You Lose!"
      }
     }

     if(playerSelection == "scissors")
    {
     if(computerSelection == "rock")
     {
        console.log("Computer chose rock...")
         results = "You Lose!"
     }
     else if(computerSelection == "paper")
     {
        console.log("Computer chose paper...")
         results = "You Win!"
     } 
     else if(computerSelection == "scissors")
      {
        console.log("Computer chose scissors...")
          results = "Draw!"
      }
    }

    return results;

}

console.log(playRound(playerChoiceInsensitive,compChoice));


function game()
{
    for( let i = 0; i<5;i++)
    {

    }
}