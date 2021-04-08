class Fighter extends Character {
  constructor(hp = 12, dmg = 4, mana = 40, name = "Grace") {
    super(hp, dmg, mana, status, name);
  }

  darkVision(victim) {
    console.log(`${this.name} utilise son attaque spéciale !`);
    let damage = 5;
    victim.takeDamage(damage);
    this.mana = this.mana - 20;
    //Jusqu'au prochain tour, il prendra 2 dégâts de moins par coup reçu
  }
}
