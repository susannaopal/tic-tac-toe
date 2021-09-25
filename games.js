// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of whose turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game*

class Game {
  constructor (player1, player2) {
//think about how this.p1 equals a new player
//can access between the two classes because of the way it is called below
    this.player1 = new Player ('player1');
    this.player2 = new Player ('player2');
    this.gameboard = [0,1,2,3,4,5,6,7,8];
    this.winTracker = [[combo of win], [combo of win in each []]];
  }
//break up into as many functions as needed
//break up in way things are ordered
  startAGame(){
    //if player1
    //if player 2
    //if gameboard
    //someone chooses a square
    //change turns (functionality main file?)
    //call add addPlayersToken
    //callChangingTurings
  }

  addPlayersToken(){
    //if spot available, can add a token
    //accessing the game board index spots (with an icon on the game board)
    //add a player's token
    //could possibly use dot notation to access the player's token
    //this.player.token
  }

  changeTurns(){
  //function for change turns (functionality main file?)
}

  trackGameboardData(){
    //for loop here for the wins in the player class
    //tracking this as the game is played
    //need to know which box has been selected
    //how do we select the box?
    //once a box is selected, how not let it be reselected
    //event.target?
    //query a box with a variable to add eventlistener to then add a function
    //then use innerHTML to add the token to that box
  }
}




//ex: var namePlayer = class Player ({id: id, token: token, wins: [#]})

//1 new instance of the game is 2 new instances of the player





//should conditionals be in here?
// What are said conditionals?
