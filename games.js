// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of whose turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game*

class Game {
  constructor (player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  trackGameboardData(){

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
