import * as readline from 'readline-sync'
let amount: number = readline.questionFloat("Geef het bedrag in: ")
let interest: number = readline.questionFloat("Geef het interest percentage in: ")
let total = amount;
for (let i = 1; i <= 5; i++) {
  total = total * (1 + interest / 100)
  if (i == 1) {
    console.log(`Na ${i} heb je ${total.toFixed(2)}`)
  }
  else if (i == 2) {
    console.log(`Na ${i} heb je ${total.toFixed(2)}`)

  }
  else if (i == 5) {
    console.log(`Na ${i} heb je ${total.toFixed(2)}`)

  }
}