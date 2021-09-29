class Game {
  constructor () {
    this.player1 = new Player ('player1', '🦬');
    this.player2 = new Player ('player2', '🏔');
    this.gameboard = {"button0": undefined, "button1": undefined, "button2": undefined, "button3": undefined, "button4": undefined, "button5": undefined, "button6": undefined, "button7": undefined, "button8": undefined};
    this.winConditions = [[0, 1, 2], [0, 4, 8], [6, 4, 2], [1, 4, 7], [3, 4, 5], [6, 7, 8],[0, 3, 6], [2, 5, 8]];
    this.currentPlayer = this.player1;
    this.clicks = 0;
    this.draw = false;
    this.gameOver = false
  }
  clickBlock(theClickedBlock){
    if (!this.gameboard[theClickedBlock]){
      this.addPlayerToken(theClickedBlock);
    }
  }
  addPlayerToken(theClickedBlock){
    this.gameboard[theClickedBlock] = this.currentPlayer
    this.clicks++
    this.getPlayerChoices()
    this.changeTurn()
  }
  changeTurn(){
    if (this.currentPlayer === this.player1){
      this.currentPlayer = this.player2
    } else if (this.currentPlayer === this.player2){
      this.currentPlayer = this.player1
    }
}
  getPlayerChoices(){
    var gameboardValues = Object.values(this.gameboard)
    var currentPlayerChoices = [];
    for (var i= 0; i < gameboardValues.length; i++){
      if(gameboardValues[i] && gameboardValues[i].id === this.currentPlayer.id) {
      currentPlayerChoices.push(i)
      }
    }
    this.checkForWin(currentPlayerChoices)
  }
  checkForWin(currentPlayerChoices){
    for (var i = 0; i < this.winConditions.length; i++){
      var winConditionCounter = 0;
      for (var j = 0; j < this.winConditions[i].length; j++) {
        if (currentPlayerChoices.includes(this.winConditions[i][j])) {
          winConditionCounter++
        }
        if (winConditionCounter === 3) {
          this.currentPlayer.counterOfWins++
          this.currentPlayer.saveWinsToStorage()
          this.gameOver = true;
          this.currentPlayer.winner = true
          hideText()
          resultsDiv.innerHTML = `You are a winner!`
        }

      }
    }
    this.checkForDraw()
  }
  checkForDraw(){
    if (!this.currentPlayer.winner && this.clicks === 9) {
      this.draw = true;
      hideText()
      resultsDiv.innerHTML = `This is a draw!`
      this.gameOver = true;
    }
  }
   resetGame(){
    this.gameOver = false;
    this.clicks = 0;
    this.player1.winner = false;
    this.player2.winner = false;
    this.draw = false;
    this.gameboard = {"button0": undefined, "button1": undefined, "button2": undefined, "button3": undefined, "button4": undefined, "button5": undefined, "button6": undefined, "button7": undefined, "button8": undefined}
  }
}
