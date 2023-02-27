/*CONTAGEM DE PONTOS*/
var contUser = 0
var contPC = 0

/* ELEMENTOS DA APLICAÇÃO*/
const imgUser = document.getElementById("user")
const imgPC = document.getElementById("pc")
const playing = document.getElementById("playing")
const contador = document.getElementById("contador")
const winner = document.getElementById("winner")
const loser = document.getElementById("loser")

/*SONS*/
const audioWin = new Audio ("Assets/sounds/vitoria.wav")
const audioLose = new Audio ("Assets/sounds/derrota.wav")

/*Variaveis de elementos*/
var player1 = ""
var player2 = ""

playing.addEventListener("click", () =>{
    reset()
    playPC()
})

function reset(){
    player1 = document.querySelector('input[name="play"]:checked').value
    imgUser.innerHTML = "<img src='Assets/" + player1 +".png'>"
    imgPC.innerHTML = ""
}

function playPC(){
    let opt = ['rock', 'paper', 'scissor']
    let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    player2 = opt[num]
    imgPC.innerHTML = "<img src='Assets/" + player2 + ".png'>"
    analyze()
}

function analyze(){
    let win = "0"
    /*
        0 = EMPATE
        1 = VITORIA
        -1 = DERROTA
    */
   if(player1 == player2){

   } else if (player1 == "rock"){
        win = player2 =='scissor' ? 1: -1
   } else if(player1 =='paper'){
    win = player2 =='rock' ? 1: -1
   }else if (player1 == 'scissor'){
    win = player2 =='paper' ? 1: -1
   }

   if(win == 0){

   }else if( win > 0){
    contUser = contUser + 1
    audioWin.play()
   }else {
    contPC = contPC +1
    audioLose.play()
   }

   contador.innerHTML = contUser + ":" + contPC

   if(contUser >= 5){
    winner.classList.remove('none')
    winner.classList.add('center')
   }
   if(contPC >= 5){
    loser.classList.remove('none')
    loser.classList.add('center')
   }

   setTimeout(() =>{
    playing.disabled = false
    clear();
   }, 800)
   }

   function clear(){
    imgPC.innerHTML =""
    imgUser.innerHTML =""
   }

   function newGame(){
    contador.innerHTML = "0:0"
    contPC = 0
    contUser = 0
    reset()
    winner.classList.add('none')
    winner.classList.remove('center')
    loser.classList.add('none')
    loser.classList.remove('center')
   }