
const container = document.querySelector('#container');




const button1 = document.createElement('button');
button1.textContent='Rock';
container.appendChild(button1);

const button2 = document.createElement('button');
button2.textContent='Paper';
container.appendChild(button2);

const button3 = document.createElement('button');
button3.textContent='Scissors';
container.appendChild(button3);


const resultsDiv = document.querySelector('#results');

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


function playRound(playerSelection, computerSelection)/*changed parameter name*/
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

/*document.getElementsByName('button1').onclick = "playRound("rock", getComputerChoice())";
*/
button1.addEventListener('click', ()=>{
   console.log(playRound("rock",getComputerChoice()));
});
button2.addEventListener('click', ()=>{
    console.log(playRound("paper",getComputerChoice()));
 });
 button3.addEventListener('click', ()=>{
    console.log(playRound("scissors",getComputerChoice()));
 });

function game()
{
    
}



