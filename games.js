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




class Game {
  constructor () {
    // console.log("i am clicking here")
    this.player1 = new Player ('player1', '🦬');
    this.player2 = new Player ('player2', '🏔');
    this.gameboard = {"button0": undefined, "button1": undefined, "button2": undefined, "button3": undefined, "button4": undefined, "button5": undefined, "button6": undefined, "button7": undefined, "button8": undefined};
//change these to string arrays  for all of them
    this.winTracker = [["button0", "button1", "button2"], ["button0", "button4", "button8"], ["button6", "button4", "button2"], ["button1", "button4", "button7"], ["button3", "button4", "button5"], ["button6", "button7", "button8"],["button0", "button3", "button6"], ["button2", "button5", "button8"]];
    this.currentPlayer = this.player1
  //below reset the board with below
    this.clicks = 0;
  }

  clickBlock(theClickedBlock){
    if (!this.gameboard[theClickedBlock]){
      this.addPlayerToken(theClickedBlock);
    }
  }

  addPlayerToken(theClickedBlock){
    this.gameboard[theClickedBlock] = this.currentPlayer
    this.changeTurn()
    console.log("this.gameboard", this.gameboard)
  }

  changeTurn(){
    if (this.currentPlayer === this.player1){
      this.currentPlayer = this.player2
    } else if (this.currentPlayer === this.player2){
      this.currentPlayer = this.player1
    }
}

  trackGameboardData(){
    console.logs in here to determine if working or not
    for (var i = 0; i < this.winTracker.length; i++){
      if (this.currentPlayer.numberOfWins.includes(this.winTracker[i][0]) && this.currentPlayer.numberOfWins.includes(this.winTracker[i][1]) && this.currentPlayer.numberOfWins.includes(this.winTracker[i][2])) {
        this.currentPlayer.counterOfWins ++
        this.clicks = 0
        this.currentPlayer.winner = true
    }
    this.changeTurn()
  }
}

  checkForDraw() {
    if (this.clicks === 9) {
      this.clicks = 0;
    }
    //check if the click count is === 9 (# of squares)
    //reset it to the beginning  || reassign it to 0
    // say that the current player is at a draw

    this.currentPlayer.draw = true;
  }


//does the timeout functionality need to come here or in main?
//and this would be called there?
  resetGame(){
    this.currentPlayer.numberOfWins = [];
    this.currentPlayer.winner = false;
    this.currentPlayer.draw = false;
  }
};


//ex: var namePlayer = class Player ({id: id, token: token, wins: [#]})

//1 new instance of the game is 2 new instances of the player





//should conditionals be in here?
// What are said conditionals?
