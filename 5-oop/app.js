'use strict'

const Person = function(race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
}

Person.prototype.talk = function() {
  console.log(`Меня зовут ${this.name} и я ${this.language}`);
}

const Ork = function(race, name, language, weapon) {
  Person.call(this, race, name, language);
  this.weapon = weapon;
}

Ork.prototype = Object.create(Person.prototype);
Ork.prototype.constructor = Ork;

Ork.prototype.strike = function() {
  console.log(`${this.name} использует ${this.weapon} и наносит урон`);
}

Ork.prototype.incantation = function() {
  console.log(`${this.name} применяет заклинание`);
}

const Elf = function (race, name, language, weapon) {
  Person.call(this, race, name, language);
  this.weapon = weapon;
}

Elf.prototype = Object.create(Person.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createIncantation = function () {
  // логика создания заклинания
  console.log(`${this.name} создаёт заклинание`);
}