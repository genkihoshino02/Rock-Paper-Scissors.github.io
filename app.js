let userchosen;
let computerchosen;
var result=results();

const userChoice=document.getElementById("userChoice");
const computerChoice=document.getElementById("computerChoice");
const resultDisplay =document.getElementById("result");
const choices = document.querySelectorAll(".choices");
const randomChoice=Math.round(Math.random() * (2)+1);



choices.forEach(choice => choice.addEventListener("click",(e)=>{
    userchosen=e.target.id;
    computerchosenGenerator();
    results();
    userChoice.innerHTML=userchosen;
    computerChoice.innerHTML=computerchosen;
    resultDisplay.innerHTML=result;
}) );

function computerchosenGenerator(){
    if(randomChoice===1){
       return computerchosen="rock";
    }else if(randomChoice===2){
        return computerchosen="papper";
    }else if(randomChoice===3){
        return computerchosen="scissors";
    }
}

function results(){
    if(userchosen ===computerchosen){
        return result ="it is tie!";
    }else if(userchosen==="rock" && computerchosen==="papper"){
        return result="you lost"
               
    }else if(userchosen==="rock" && computerchosen==="scissors"){
        return result="you won"
    }else if(userchosen==="papper" && computerchosen==="rock"){
        return result="you won"
    }else if(userchosen==="papper" && computerchosen==="scissors"){
        return result="you lost"
        
    }else if(userchosen==="scissors" && computerchosen==="rock"){
        return result="you lost"
        
    }else if(userchosen==="scissors" && computerchosen==="papper"){
        return result="you won"
    }


}