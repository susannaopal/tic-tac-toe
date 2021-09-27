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
var buffaloToken = document.querySelector(".buffalo-token");
var mountainToken = document.querySelector("#mountainToken");
var turnToken = document.querySelector('.turn-token');


//EVENT LISTENERS👇

gameboardGrid.addEventListener('click', playTokenOnBlock);


//FUNCTIONS & EVENT HANDLERS👇

function playTokenOnBlock(event){
  var theClickedBlock = event.target.classList[0]
  if (game.player1 === game.currentPlayer) {
  document.querySelector(`.${theClickedBlock}`).innerHTML = `🦬`
} else {
  document.querySelector(`.${theClickedBlock}`).innerHTML = `🏔`
}
  game.clickBlock(theClickedBlock)
  document.querySelector(`.${theClickedBlock}`).disabled = true;
  updateEmojiTurn()
}

function updateEmojiTurn(){
  //update this property by hiding the other
  // buffaloToken.classList.add("hidden");
  // mountainToken.classList.hide("hidden")
  if (game.currentPlayer === game.player1) {
    turnToken.innerHTML = `${game.player1.token} it's your turn`
  } else if (game.currentPlayer === game.player2){
    turnToken.innerHTML = `${game.player2.token} it's your turn now`
  }
}


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
