//Global Variable 👇
var game = new Game();

//QUERY SELECTORS 👇
var gameboardGrid = document.querySelector("#gameboardGrid");
var buffaloToken = document.querySelector("#buffaloToken");
var mountainToken = document.querySelector("#mountainToken");
var turnToken = document.querySelector("#turnToken");
var resultsDiv = document.querySelector("#resultsDiv");
var teamBuffaloWins = document.querySelector("#playerOneWins");
var teamMountainWins = document.querySelector("#playerTwoWins");
var blocks = document.querySelectorAll(".block");

function showWinsFromStorage(){
  game.player1.retrieveWinsFromStorage()
  game.player2.retrieveWinsFromStorage()
  teamBuffaloWins.innerHTML =  `${game.player1.counterOfWins}`
  teamMountainWins.innerHTML =  `${game.player2.counterOfWins}`
}

//EVENT LISTENERS👇
window.addEventListener('load', showWinsFromStorage);
gameboardGrid.addEventListener('click', playTokenOnBlock);

//FUNCTIONS & EVENT HANDLERS👇
function playTokenOnBlock(event){
  var theClickedBlock = event.target.classList[0]
  if (game.player1 === game.currentPlayer) {
  document.querySelector(`.${theClickedBlock}`).innerHTML = `🦬`
  console.log(game)
} else {
  document.querySelector(`.${theClickedBlock}`).innerHTML = `🏔`
}
game.clickBlock(theClickedBlock)
  document.querySelector(`.${theClickedBlock}`).disabled = true;
  updatePlayerTokenTurn()
  showTeamWins()
  if(game.gameOver === true){
    game.resetGame()
    window.setTimeout(clearBoard, 2000)
  }
}

function startAnotherGame(){
  console.log("are you working?")
  resultsDiv.classList.remove('hidden')
}

function clearResults(){
  resultsDiv.classList.add('hidden')
}

function showPhrase() {
  turnToken.classList.remove('hidden')
}
function hidePhrase(){
  turnToken.classList.add('hidden')
}

function clearBoard(){
  for (var i = 0; i < blocks.length; i++){
    blocks[i].innerHTML = ""
    blocks[i].disabled = false;
  }
  showPhrase()
  clearResults()
}

function updatePlayerTokenTurn(){
  if (game.currentPlayer === game.player1) {
    turnToken.innerHTML = `it's ${game.player1.token} turn`
  } else if (game.currentPlayer === game.player2){
    turnToken.innerHTML = `it's ${game.player2.token} turn`
  }
}

function showTeamWins(){
  var player1Wins = game.player1.counterOfWins
  var player2Wins = game.player2.counterOfWins
  teamBuffaloWins.innerHTML = `${game.player1.counterOfWins}`
  teamMountainWins.innerHTML = `${game.player2.counterOfWins}`
}
