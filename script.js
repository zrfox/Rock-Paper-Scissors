




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


function playRound(playerSelection, computerSelection)
{
   if(playerSelection == "rock")
   {
    if(computerSelection == "rock")
    {
        console.log("Computer chose rock...");
        results = "Draw!";
    }
    else if(computerSelection == "paper")
    {
        console.log("Computer chose paper...");
        results = "You Lose!";
    } 
    else if(computerSelection == "scissors")
     {
        console.log("Computer chose scissors...");
         results = "You Win!";
     }
    }
    
    else if(playerSelection == "paper")
    {
     if(computerSelection == "rock")
     {
        console.log("Computer chose rock...");
         results = "You Win!";
     }
     else if(computerSelection == "paper")
     {
        console.log("Computer chose paper...");
         results = "Draw!";
     } 
     else if(computerSelection == "scissors")
      {
        console.log("Computer chose scissors...");
          results = "You Lose!";
      }
     }

    else if(playerSelection == "scissors")
    {
     if(computerSelection == "rock")
     {
        console.log("Computer chose rock...");
         results = "You Lose!";
     }
     else if(computerSelection == "paper")
     {
        console.log("Computer chose paper...");
         results = "You Win!";
     } 
     else if(computerSelection == "scissors")
      {
        console.log("Computer chose scissors...");
          results = "Draw!";
      }
    }
    else{
        return results = "Error - try again";
    }
    return results;

}



function game()
{
    
}

game();