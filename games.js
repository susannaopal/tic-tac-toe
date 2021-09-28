//this is just class to class interaction!!!
//DON'T FREAK OUT!!!!!
//<3

// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of whose turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game*

//constructorNotes:
//think about how this.p1 equals a new player
//can access between the two classes because of the way it is called below
//start game as a false draw and only be true if that is correct
//break up into as many functions as needed
//break up in way things are ordered
//these functions will not be super long

//start a game notes:
//DOM will have event.target.id helping to ID the clicked square
//if player1
//if player 2
//if gameboard
//someone chooses a square
//change turns (functionality main file?)
//call add addPlayersToken
//callChangingTurings

//ADDPLAYER TOKEN notes
//example of max 5-6 lines coded
//event listener in main js will tell me who is playing but this function is just the floor model (without the dom manip it is just generic)
//look at player class from within this method
//if spot available, can add a token
//accessing the game board index spots (with an token on the game board)
//add a player's token
//could possibly use dot notation to access the player's token
//a token on a square
//access the gameboard array and fill in the spot with the token
//splicing (look at who is playing)
//starting with the click square, changing it the square(# value), placing the token
//pushing the token into the number of wins array because this doesn't sense we need ParseInt to actually count the number of wins to push into the array)
//when this method gets called on the main js it will ask if an event has been listened to as a click

//changeTurn notes:
//function for change turns (functionality main file?)
//how to changeTurns
//need to check if someone has played a token on a theClickedBlock
//need to check if either player has clicked a button and if so, then it goes to the other player


//trackGameboardData:
//for loop here for the wins in the player class
//tracking this as the game is played
//need to know which box has been selected
//how do we select the box?
//once a box is selected, how not let it be reselected
//event.target?
//query a box with a variable to add eventlistener to then add a function
//then use innerHTML to add the token to that box
//if not a win then need to change turns
//cyle thru win tracker and the number of wins (both classes and each player and see if either player has played through either conditions)
//forloop with conditionals
//going through the this.wins array of arrays and checking the mini arrays index 012 spots
//don't mix up the actual #s with the indexes of the mini arrays


// checkforwins:
//still NEED to figure out how to update the innerHTML on the DOM to showcase a win but currently the win isn't working (need it to push for local storage)


//original piece of function (to delete)
  // this.currentPlayer.counterOfWins ++
  // this.clicks = 0

// if (this.currentPlayer.numberOfWins.includes(this.winConditions[i][0]) && this.currentPlayer.numberOfWins.includes(this.winConditions[i][1]) && this.currentPlayer.numberOfWins.includes(this.winConditions[i][2])) {
  // console.log("this still working?")


// each player would have their own array and loop through the possible win conditions and see if that includes

//ex: var namePlayer = class Player ({id: id, token: token, wins: [#]})

//1 new instance of the game is 2 new instances of the player


//original conditional that failed so we tried the every method and ended up with a nested forloop
  // currentPlayerChoices.includes(this.winConditions[i])
  // below worked but cannot use:
  // this.winConditions[i].every(num => currentPlayerChoices.includes(num)

//timeout eventually notes"
//does the timeout functionality need to come here or in main?
//and this would be called there?
    //this needs to update or reset for the next games//how?


// sunday night notes:
  //get getPlayerChoices needs to still update the array for the player class because it isn't pushing into this.numberofwins because it isn't being asked to
  //still need to figure out how to push this wins into the array this.numberOfWins?
  //And figure out how to update the DOM so that the number of wins can be replaced by innerHTML



//should conditionals be in here?
// What are said conditionals?

class Game {
  constructor () {
    this.player1 = new Player ('player1', '🦬');
    this.player2 = new Player ('player2', '🏔');
    this.gameboard = {"button0": undefined, "button1": undefined, "button2": undefined, "button3": undefined, "button4": undefined, "button5": undefined, "button6": undefined, "button7": undefined, "button8": undefined};
    this.winConditions = [[0, 1, 2], [0, 4, 8], [6, 4, 2], [1, 4, 7], [3, 4, 5], [6, 7, 8],[0, 3, 6], [2, 5, 8]];
    this.currentPlayer = this.player1;
    this.clicks = 0;
    this.draw = false;
  }

  clickBlock(theClickedBlock){
    if (!this.gameboard[theClickedBlock]){
      this.addPlayerToken(theClickedBlock);
      // console.log("anything here")
    }
  }

  addPlayerToken(theClickedBlock){
    this.gameboard[theClickedBlock] = this.currentPlayer
    this.clicks++
    this.getPlayerChoices()
    // console.log("try it")
    this.changeTurn()
  }

  changeTurn(){
    // console.log(this.currentPlayer)
    if (this.currentPlayer === this.player1){
      this.currentPlayer = this.player2
    } else if (this.currentPlayer === this.player2){
      this.currentPlayer = this.player1
    }
}

  getPlayerChoices() {
    var gameboardValues = Object.values(this.gameboard)
    var currentPlayerChoices = [];
    for (var i= 0; i < gameboardValues.length; i++){
      if(gameboardValues[i] && gameboardValues[i].id === this.currentPlayer.id) {
      currentPlayerChoices.push(i)
      }
    }
    this.checkForWin(currentPlayerChoices)
    console.log("this is a test")
  }

  checkForWin(currentPlayerChoices){
console.log(currentPlayerChoices, "what are you?")
    // var currentPlayerChoices = [];
    for (var i = 0; i < this.winConditions.length; i++){
      var winConditionCounter = 0;
      for (var j = 0; j < this.winConditions[i].length; j++) {
        if (currentPlayerChoices.includes(this.winConditions[i][j])) {
          winConditionCounter++
        }
        if (winConditionCounter === 3) {
          this.currentPlayer.counterOfWins ++
          this.currentPlayer.winner = true
          console.log("you are a winner")
          hideText()
          resultsDiv.innerHTML = `You are a winner!`
        }
      }
    }
    console.log("heeeeeeeey checkfor this check for win")
    this.checkForDraw()
    console.log("this is draw", this.checkForDraw())
  }

  checkForDraw() {
    if (!this.currentPlayer.winner && this.clicks === 9) {
      this.draw = true;
      hideText()
      resultsDiv.innerHTML = `This is a draw!`
      //this.resetGame()
    }
  }
//function isn't currently working
//need to be able to reset the gameboard after getting the DOM to display player win or a draw!
  resetGame(){
    this.currentPlayer.numberOfWins = [];
    this.clicks = 0;
    this.currentPlayer.winner = false;
    this.currentPlayer.draw = false;
    timeOut(playNewGame, 3000);
  }
}
