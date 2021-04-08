class Character {
  constructor(hp, dmg, mana, status, name) {
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = "playing";
    this.name = name;
  }

  takeDamage(damage) {
    this.hp = this.hp - damage;
    if (this.hp <= 0) {
      this.status = "loser";
      console.log(`${this.name} est mort ...`);
    } else {
      console.log(`${this.name} a encore ${this.hp} points de vie.`);
    }
  }

  dealDamage(victim) {
    console.log(`${this.name} attaque ${victim.name} et lui inflige ${this.dmg} dommages.`);
    victim.takeDamage(this.dmg);
  }
}