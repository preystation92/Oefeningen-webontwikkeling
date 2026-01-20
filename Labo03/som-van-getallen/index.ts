import * as readline from 'readline-sync'

let numbers: number[] = [];
let amountToCount: number = readline.questionInt("Hoeveel getallen wil je optellen? ");
let totalSom = 0;
for (let i = 1; i <= amountToCount; i++) {
  numbers.push(readline.questionInt(`Geef getal ${i} `))
  totalSom = numbers[i - 1] + totalSom;
}
console.log("De som van de getallen zijn ", totalSom)