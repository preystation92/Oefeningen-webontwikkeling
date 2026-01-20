import * as readline from 'readline-sync'

let numberOfPeople: number = readline.questionInt("Geef het aantal personen in:");
let counter = 0;

do {



  counter++;
} while (numberOfPeople != counter)