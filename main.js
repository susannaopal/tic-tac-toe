// A main.js file that contains all DOM related JavaScript

//may need to connect the game and player class files here
//instiatiate the classes here
//review paired < instite the new poster

//everything needs to go in here

//build out HTML/css stuff
//PSEUDOCODE MORE after getting to display
//then go through the user flow
//when opening the page what should i see?
//instiate 2 new players on the page load
//conditionals for each players takeTurn
//evaluate a turn

//can skip a step to keep working around until getting to localStorage
//do not worry about this yet

//eventlisterers and queries here to see what needs to be selected and when
//functionality will come from here
//WRITE LITTLE LITTLE CHUNKS

//when a box is selected then it will need to be disabled -- how to do? review button disabling!

//anything we are manipulating goes in here but the classes are the data model (array in player class)


// A TIMEOUT is used after a completed game to reset the board:


// EVENTUALLY NEED THIS FUNCTIONALITY: DOM Manipulator to replace the empty square with the token when it is clicked and if it is empty
//if it is the square that has been clicked and doesn't have a token, then change the innerTEXT to whoever's turn it is token



//Global Variables 👇
var game = new Game()


//QUERY SELECTORS 👇
//do i need a query selector all for button? or are the individually called?
//what will need to be grabbed for a click event?
//is it distinguishing which button is clicked or is it listening just for a button?
//what conditionals are needed for the button in order to play the token?
//
// var button = document.querySelectorAll(".button")
// var button0 = document.querySelector("#zero");
// var button1 = document.querySelector("#one");
// var button2 = document.querySelector("#two");
// var button3 = document.querySelector("#three");
// var button4 = document.querySelector("#four");
// var button5 = document.querySelector("#five");
// var button6 = document.querySelector("#six");
// var button7 = document.querySelector("#seven");
// var button8 = document.querySelector("#eight");

//these should all be IDS when refactoring
var gameboardGrid = document.querySelector("#gameboardGrid");
var buffaloToken = document.querySelector("#buffaloToken");
var mountainToken = document.querySelector("#mountainToken");
var turnToken = document.querySelector("#turnToken");
var resultsDiv = document.querySelector("#resultsDiv");
var teamBuffaloWins = document.querySelector("#playerOneWins");
var teamMountainWins = document.querySelector("#playerTwoWins");


//EVENT LISTENERS👇
//need to build out below for localStorage once implemented
// window.addEventListener('load', loadGamePage)
gameboardGrid.addEventListener('click', playTokenOnBlock);


//FUNCTIONS & EVENT HANDLERS👇

function playTokenOnBlock(event){
  // alert("hellllo")
  var theClickedBlock = event.target.classList[0]
  if (game.player1 === game.currentPlayer) {
  document.querySelector(`.${theClickedBlock}`).innerHTML = `🦬`
} else {
  document.querySelector(`.${theClickedBlock}`).innerHTML = `🏔`
}
// console.log("is this here")
game.clickBlock(theClickedBlock)
  // console.log(theClickedBlock)
  document.querySelector(`.${theClickedBlock}`).disabled = true;
  updatePlayerTokenTurn()
  showTeamWins()

//need to create a GAMEOVER timeout FUNCTION (see game over property added in game class)
  if(game.gameOver === true){
    game.resetGame()
  }
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
  if(game.player1.counterOfWins === 1) {
    teamBuffaloWins.innerHTML = `${game.player1.counterOfWins}`

  } else if(game.player2.counterOfWins === 1)
  teamMountainWins.innerHTML = `${game.player2.counterOfWins}`

}

//need to be able to disable the board after a winner is called


//write a function called resetgame for the timeout function


//need a function for localStorage
//window addEventListener (would this work? need to figure out the JSON piece and the key)
//function loadGamePage(){
// game.player1.retrieveWinsFromStorage()
// game.player2.retrieveWinsFromStorage()
//teamBuffaloWins.innerHTML = game.player1.counterOfWins
// teamMountainWins.innerHTML = game.player2.counterOfWins
// }







//function to tell when a player has won OR if it has ended in a draw
//function will also need to update the innerHTML of the game player token phrase
//something like if a player has won (using check for a win); then the game ends
// or if clicks get to 9 then the game ends there and a return of a draw
//likely two different functions to keep simple and to the point
//or would this be all in one function?

// function updateWhoWon(){
//   if (game.currentPlayer === game.player1.winner) {
//     turnToken.innerHTML = `${game.player1.token} won!`
//   } else if (game.currentPlayer === game.player2.winner){
//     turnToken.innerHTML = `${game.player2.token} won!`
//   }
//   //else if a DRAW (conditions? and innerHTML needs to be updated)
// }

function hideText(){
  turnToken.classList.add('hidden');
}


//if checkforawin has run and then someone has won, need to END the game
//return string that updates the innerHTML
//game needs to start over automatically after someone wins (but this is timeout functionality related to localStorage)
// checkForWin(currentPlayerChoices)

// function updateWithDraw(){
// //if checkforadraw is true after running check for a win and there isn't a win because 9 clicks have happened, the innerHTML needs to update its property to a draw for the turnToken
// if (this.draw === true){
//   return turnToken.innerHTML = `🦬 Tt's a draw! 🏔`
//   }
// }






//update this property by hiding the other
// buffaloToken.classList.add("hidden");
// mountainToken.classList.hide("hidden")
//one want to start a new game if someone wins or a draw




// function playTokenOnBlock(){
//   startAGame()
// //does this need an event prevent?
// //not working with it, but if need it then add into param
//   // event.preventDefault()
//
//   //startAGame() to place a token does this need to be called first
//   //it is checking to see if the token box is free and if so
//   //then a token can be played on that clicked square
//   if (button0.checked) {
//     //need to return the current players token?
//     buffaloToken.classList.add("hidden");
//     mountainToken.classList.hide("hidden")
//     button0.innerText = `
//     <button class="button0 block" id="zero"> <img class="buffalo-token" alt="buffalo-cartoon">🦬</button>
//    `
//   } if (button1.checked){
//     //need to return the current players token?
//   } if (button2.checked){
//     //need to return the current players token?
//   } if (button3.checked){
//   //need to return the current players token?
//   } if (button4.checked){
//     //need to return the current players token?
//   } if (button5.checked){
//       //need to return the current players token?
//   } if (button6.checked){
//     //need to return the current players token?
//   } if (button7.checked){
//     //need to return the current players token?
//   }if (button8.checked){
//     //need to return the current players token?
//   }
//   // addPlayerToken()
// }


//conditionals for a function to determine if that particular block / button has been theClickedBlock
//how to check if the button has been clicked?
//once clicked, placing token (see game)
//


// function playTokenOnBlock() {
//   if (event.target.classList.contains("button")) {
//     buffaloToken.classList.add("hidden");
//     mountainToken.classList.hide("hidden");
//     button0.innerHTML = `
//     <button class="button0 block" id="zero"> <img class="buffalo-token" alt="buffalo-cartoon">🦬</button>
//     `
//   }
// };
    //
    // determine which block is clicked
    // adding or hiding classes
    // if player 1 is true, play this token, else refuse to let other token play
    //
    //
