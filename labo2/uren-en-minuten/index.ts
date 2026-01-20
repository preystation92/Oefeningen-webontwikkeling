import *  as readline from 'readline-sync'

let minutesUser: number = readline.questionFloat("Geef het aantal minuten in:");

let hours = minutesUser / 60;
let minutes = minutesUser % 60;
console.log(`Dit is ${Math.floor(hours)} en ${minutes} minuten`);
