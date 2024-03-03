
let playerTurn;
let computerTurn;
let order =[]; //order of flashing
let playerOrder=[]; //player entries
let scoreCounter;
let correct;
let win;
let interval;
let sound;
let flash;

const play=document.getElementById("play")
const level =document.getElementById()
const green=document.getElementsByClassName("tile green inactive")
const red=document.getElementsByClassName("tile red inactive")
const blue=document.getElementsByClassName("tile blue inactive")
const yellow =document.getElementsByClassName("tile yellow inactive")
const score=document.getElementById("score")


play.addEventListener("click", function playGame(){
    startGame()
    correct=true;
    win=false;
    score=0;
    scoreCounter=0;
    order=[];
    playerOrder=[];
    level.innerHTML=1
    correct=true
    for ( var i=0; i<12; i++){
        order.push(Math.floor(Math.random()*4)+1);
    computerTurn=true
    }
    interval=setInterval(turnSwitch,800)

})

function startGame(){
    play.classList.add("hidden");

}

function turnSwitch(){
    if(computerTurn){
    setTimeout(() => {
        if (order[flash]==1) one();
        if (order[flash]==2) two(); 
        if (order[flash]==3) three();
         if (order[flash]==4) four();

        
    },200);
    
}}

function one(){
    if (sound){
        const audio= new Audio("/sounds/green.mp3")
        audio.play()
    }
    sound=true
    green.classList.remove("inactive");
}


function two(){
    if (sound){
        const audio= new Audio("/sounds/red.mp3")
        audio.play()
    }
    sound=true
    red.classList.remove("inactive");
}
function three(){
    if (sound){
        const audio= new Audio("/sounds/yellow.mp3")
        audio.play()
    }
    sound=true
    yellow.classList.remove("inactive");
}

function four(){
    if (sound){
        const audio= new Audio("/sounds/blue.mp3")
        audio.play()
    }
    sound=true
    blue.classList.remove("inactive");
}



