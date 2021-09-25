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


//Global Variables 👇
// var game = new Game();


//QUERY SELECTORS 👇
var boxA1 = document.querySelector("#aOne");
var boxA2 = document.querySelector("#aTwo");
var boxA3 = document.querySelector("#aThree");
var boxB1 = document.querySelector("#bOne");
var boxB2 = document.querySelector("#bTwo");
var boxB3 = document.querySelector("#bThree");
var boxC1 = document.querySelector("#cOne");
var boxC2 = document.querySelector("#cTwo");
var boxC3 = document.querySelector("#cThree");
var gameboardGrid = document.querySelector("#gameboardGrid");
var buffaloToken = document.querySelector("#buffaloToken");
var mountainToken = document.querySelector("#mountainToken");

//EVENT LISTENERS👇

gameboardGrid.addEventListener('click', selectGridBlock);


//FUNCTIONS & EVENT HANDLERS👇

function selectGridBlock() {
  if (event.target.classList.contains("block")) {
    buffaloToken.classList.toggle("hidden");
    mountainToken.classList.toggle("hidden");
    boxA1.innerHTML = `
    <div class="a1 block" id="aOne"> <img class="buffalo-token" src="assets/buffalo.svg" alt="buffalo-cartoon"></div>
    `
//     //determine which block is clicked
//     //adding or hiding classes
//     //if player 1 is true, play this token, else refuse to let other token play
//
 }
};
