'use strict'

class Person {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  talk() {  // Метод говорить
    console.log(`Меня зовут ${this.name} и я ${this.language}`);
  }
}

class Ork extends Person {
  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.weapon = weapon;
  }
  talk() {  // Переопределили метод говорить для орков
    console.log(`Меня зовут ${this.name} и я ${this.language}`);
  }

  strike() {
    console.log(`${this.name} использует ${this.weapon} и наносит урон`);
  }
}

class Elf extends Person {
  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.weapon = weapon;
  }

  talk() {  // Переопределили метод говорить для эльфов
    console.log(`Меня зовут ${this.name} и я ${this.language}`);
  }

  createIncantation() {
    // логика создания заклинания
    console.log(`${this.name} создаёт заклинание`);
  }

  incantation() {
    console.log(`${this.name} применяет заклинание`);
  }
}
