let userScore=0;
let compScore=0;
const boxes=document.querySelectorAll(".box");
const msg=document.querySelector("#message");
const user=document.querySelector("#user-score");
const comp=document.querySelector("#comp-score");

const genCompChoice=()=>{
     //for computer choice
     const options=["rock","paper","scissors"];
     const randomIdx=Math.floor(Math.random()*3);
     return options[randomIdx];
}

const drawGame=()=>{
     msg.innerText="Game was draw! Play again.";
     msg.style.backgroundColor="#f1edae";
     msg.style.borderRadius="20px";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
      userScore++;
      user.innerText=userScore;
      msg.innerText=`You win! Your ${userChoice} beats ${compChoice}.`;
      msg.style.backgroundColor="#9baed4";
      msg.style.borderRadius="20px";
    }
    else{
        compScore++;
        comp.innerText=compScore;
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor="#fda0a3";
        msg.style.borderRadius="20px";
    }

}

const playGame=(userChoice)=>{  
     const compChoice=genCompChoice();
     //fight
     if(userChoice==compChoice){
       drawGame();
     }
     else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=(compChoice=="paper")?false:true;
        }
        else if(userChoice=="paper"){
            userWin=(compChoice=="scissors")?false:true;
        }
        else
            userWin=(compChoice=="rock")?false:true;
        showWinner(userWin,userChoice,compChoice);
     }
}


boxes.forEach((box)=>{
 box.addEventListener("click",()=>{
     const userChoice=box.getAttribute("id");//get access to id of user choice
     playGame(userChoice);//pass it in fn to compare
 })
})


