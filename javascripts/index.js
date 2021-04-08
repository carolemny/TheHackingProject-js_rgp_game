startGame = function startGame() {
  //Game initialization
  game = new Game;

  //Players initialization
  game.initializePlayers();

  //Welcome message
  console.log("Bienvenue dans mon premier jeu RPG en JS 🥳");
  console.log("Les joueurs sont :");

  //Game
  while (game.isOnGoing()) {
    game.showPlayers();
    game.players.forEach((currPlayer) => {
      const victim = game.getVictim(currPlayer);
      currPlayer.dealDamage(victim);
      if (victim.hp <= 0) {
        game.killPlayer(victim);
      }
    })  
  }

  //End of the game
  game.endGame();
}

document.getElementById("btn").addEventListener("click", startGame);
