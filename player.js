class Player {
  constructor (id, token) {
    this.id = id;
    this.token = token;
    this.counterOfWins = 0;
    this.winner = false;
  }
saveWinsToStorage() {
  localStorage.setItem(this.id, JSON.stringify(this.counterOfWins))
}
 retrieveWinsFromStorage() {
   var parsedWins = JSON.parse(localStorage.getItem(this.id))
   if (parsedWins) {
     this.counterOfWins = parsedWins
   }
 }
}
