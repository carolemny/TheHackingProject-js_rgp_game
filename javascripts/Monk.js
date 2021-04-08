class Monk extends Character {
  constructor(hp = 8, dmg = 2, mana = 200, name = "Moana") {
    super(hp, dmg, mana, status, name);
  }

  heal() {
    console.log(`${this.name} utilise son attaque spéciale !`);
    this.hp = this.hp + 8;
    this.mana = this.mana - 25;
  }
}
