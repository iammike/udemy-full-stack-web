const superheroes = require('superheroes');
const supervillains = require('supervillains');

const hero = superheroes.random();
const villain = supervillains.random()

console.log(hero + " vs. " + villain + "... FIGHT!");
