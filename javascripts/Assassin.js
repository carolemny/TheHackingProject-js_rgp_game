class Assassin extends Character {
  constructor(hp = 6, dmg = 6, mana = 20, name = "Carl") {
    super(hp, dmg, mana, status, name);
  }

  shadowHit(victim) {
    console.log(`${this.name} utilise son attaque spéciale !`);
    //L'Assassin aura une attaque spéciale Shadow hit lui permettant de ne pas prendre de dégâts lors du prochain tour. Il portera alors une attaque spéciale infligeant 7 dégâts puis, si l'adversaire n'est pas mort, l'assassin perdra 7 dégâts à son tour. Cette attaque coûte 20 mana.
  }
}
