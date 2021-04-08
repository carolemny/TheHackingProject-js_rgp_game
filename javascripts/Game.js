class Game {
  constructor(turnLeft = 10, players = new Array()) {
    this.turnLeft = turnLeft;
    this.players = players;
  }

  initializePlayers() {
    let player1 = new Fighter();
    let player2 = new Paladin();
    let player3 = new Monk();
    let player4 = new Berzerker();
    let player5 = new Assassin();
    this.players.push(player1, player2, player3, player4, player5);
  }

  //startTurn() {
  //  console.log(`Il reste ${this.turnLeft} tours.`)
  //}

  //endTurn() {
  //  this.turnLeft = this.turnLeft - 1;
  //} 

  isOnGoing() {
    return this.players.length > 1 ? true : false;
  }

  killPlayer(playerToKill) {
    console.log(`${playerToKill.name} ne joue plus`);
    this.players = this.players.filter((player) => player.hp > 0);
  }

  getVictim(currPlayer) {
    const victims = this.players.filter((player) => player !== currPlayer);
    //return victims
    const randomVictim = victims[Math.floor(Math.random() * victims.length)];
    return randomVictim;
  }

  endGame() {
    console.log("La partie est finie !");
    this.players.forEach((player) => {
      player.status = "winner";
      console.log(`Bravo ${player.name}, tu as survécu !`);
    });
  }

  showPlayers() {
    this.players.forEach((player) => {
      console.log(
        `👤 ${player.name} || ${player.hp} points de vie, ${player.dmg} points de dégâts`
      );
    });
    console.log("🤼 Que le combat commence ! 🤼‍♂️");
  }
}
