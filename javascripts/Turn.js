class Turn  {
  constructor(game) {
    this.game = game;
  }

  new(){
    this.game.showPlayers();
    this.game.players.forEach((currPlayer) => {
      const victim = this.game.getVictim(currPlayer);
      currPlayer.dealDamage(victim);
      //this.menu(currPlayer);
    })
  }

  //menu(currPlayer) {
  //  console.log(`${currPlayer.name}, que souhaites-tu faire ?`);
  //  console.log(`1- Attaquer un ennemi`);
  //  console.log(`2- Regarder le status des joueurs`);
  //  const playerChoice = window.prompt(
  //    `${currPlayer.name}, que souhaites-tu faire ?`,
  //    ""
  //  );
  //  switch (playerChoice) {
  //    case "1":
  //      this.attackMenu(currPlayer);
  //      break;
  //    case "2":
  //      this.game.showPlayers();
  //      this.menu(currPlayer);
  //      break;
  //    default:
  //      console.log("Merci de rentrer un nombre valable.");
  //      this.menu(currPlayer);
  //      break;
  //  }
  //}

  //attackMenu(currPlayer){
  //  console.log(`${currPlayer.name}, qui veux-tu attaquer ?`);
  //  const victim = this.game.getVictim(currPlayer);
  //  this.game.players.forEach((player, index) => {
  //    console.log(`${index} - ${player.name}`);
  //  })
  //  const victimChoice = window.prompt(`${currPlayer.name}, qui veux-tu attaquer ?`, "");
  //  currPlayer.dealDamage(this.game.players[victimChoice]);
  //}
}