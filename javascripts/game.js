class Game {
  constructor(turnLeft = 10, ) {
    
  }

  newTurn(){
    while (this.turnLeft >= 0) {
      this.turnLeft = this.turnLeft - 1;
    }
    console.log('La partie est terminée.');
  }
}