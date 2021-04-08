class Berzerker extends Character {
  constructor(hp = 8, dmg = 4, mana = 0, name = "Draven") {
    super(hp, dmg, mana, status, name);
  }

  rage(victim) {
    console.log(`${this.name} utilise son attaque spéciale !`);
    //donnant +1 pour ses attaques pour tout le reste de la partie mais lui enlevant 1 hp. Elle coûte 0 mana. Elle peut être appelée plusieurs fois (par exemple, si le Berzerker a fait son attaque spéciale 2 fois, ses attaques infligeront 4 + 2 = 6 points de dégât).
  }
}