// Player methods must include, but are not limited to:
// constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
// saveWinsToStorage
// retrieveWinsFromStorage
// takeTurn

//
// Create the class Player
// Build out the class with its constructor / What properties are needed?
// constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
// What does this class need to focus specifically on?
// Methods required - how will they work?


class Player {
  constructor (id, token) {
    this.id = id;
    //takes a string of a name
    this.token = token;
    //the token could take a string or am emoji
    this.wins = [];
    //project spec shows an empty array?? or is this zero?
  }
  saveWinsToStorage(){
  }
  retrieveWinsFromStorage () {
  }
};

module.exports = Player;


//LEAVE NOTES WHERE NEEDED FOR ME
