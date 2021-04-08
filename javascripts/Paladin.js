class Paladin extends Character {
  constructor(hp = 16, dmg = 3, mana = 160, name = "Ulder") {
    super(hp, dmg, mana, status, name);
  }

  healingLighting(victim) {
    console.log(`${this.name} utilise son attaque spéciale !`);
    let damage = 4;
    victim.takeDamage(damage);
    this.hp = this.hp + 5;
    this.mana = this.mana - 40;
  }
}