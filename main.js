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
var game = new Game();


//QUERY SELECTORS 👇
//do i need a query selector all for button? or are the individually called?
//what will need to be grabbed for a click event?
//is it distinguishing which button is clicked or is it listening just for a button?
//what conditionals are needed for the button in order to play the token?
//
var button = document.querySelectorAll(".button")
var button0 = document.querySelector("#zero");
var button1 = document.querySelector("#one");
var button2 = document.querySelector("#two");
var button3 = document.querySelector("#three");
var button4 = document.querySelector("#four");
var button5 = document.querySelector("#five");
var button6 = document.querySelector("#six");
var button7 = document.querySelector("#seven");
var button8 = document.querySelector("#eight");
var gameboardGrid = document.querySelector("#gameboardGrid");
// var buffaloToken = document.querySelector("#buffaloToken");
// var mountainToken = document.querySelector("#mountainToken");

//EVENT LISTENERS👇

// gameboardGrid.addEventListener('click', selectGridBlock);


//FUNCTIONS & EVENT HANDLERS👇

// function selectGridBlock() {
//   if (event.target.classList.contains("block")) {
//     buffaloToken.classList.toggle("hidden");
//     mountainToken.classList.toggle("hidden");
//     boxA1.innerHTML = `
//     <div class="a1 block" id="aOne"> <img class="buffalo-token" src="assets/buffalo.svg" alt="buffalo-cartoon"></div>
//     `
    // boxA2.innerHTML = `

    // <div class="a2 block" id="aOne"> <img class="buffalo-token" src="assets/buffalo.svg" alt="buffalo-cartoon"></div>
    // `
    // boxA3.innerHTML = `
    // <div class="a3 block" id="aOne"> <img class="buffalo-token" src="assets/buffalo.svg" alt="buffalo-cartoon"></div>
    // `
//     //determine which block is clicked
//     //adding or hiding classes
//     //if player 1 is true, play this token, else refuse to let other token play
//
//  }
// };



//
