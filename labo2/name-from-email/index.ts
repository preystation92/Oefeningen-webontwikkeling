import * as readline from 'readline-sync'
let keepGoing: boolean
do {
  let email: string = readline.question("Geef het email adres in: ");

  let firstPart = email.split("@")[0]
  let secondPart = email.substring(".")[0]
  let fullUserName = secondPart[0].toUpperCase() + " " + firstPart
  console.log(`De naam is ${fullUserName}`)
  keepGoing = readline.keyInYNStrict("Wil je nog een email adres ingeven? (y/n)")
} while (keepGoing);
