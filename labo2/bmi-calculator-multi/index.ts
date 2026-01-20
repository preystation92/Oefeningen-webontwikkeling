import * as readline from 'readline-sync'

let numberOfPeople: number = readline.questionInt("Geef het aantal personen in:");
let counter = 1;

do {
  let name: string = readline.question("Geef de naam van persoon " + counter)
  let userWeight: number = readline.questionFloat(`Geef het gewicht van ${name} in `)
  let userLength: number = readline.questionFloat(`Geef de lengte van ${name} in (in m):`)
  let BMI: number = userWeight / (userLength * userLength);
  console.log(`${name} heeft een BMI van ${BMI.toFixed(2)}.`)

  counter++;
} while (numberOfPeople + 1 != counter)