class Character {
  constructor(hp, dmg, mana, status = "playing", name) {
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.name = name;
  }

  takeDamage(damage) {
    this.hp = this.hp - damage;
    console.log(`${this.name} perd ${damage} points de vie.`);
    if (this.hp <= 0) {
      this.status = "loser";
      console.log(`${this.name} est mort ...`);
    }
  }

  dealDamage(victim) {
    console.log(`${this.name} attaque ${victim.name}.`);
    victim.takeDamage(this.dmg);
  }
}