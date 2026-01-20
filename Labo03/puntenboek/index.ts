import r from 'readline-sync'
let pointsBook: number[] = []
let counter = 1;
let countFailed = 0;
let keeprunning: boolean = true;
let totalSom = 0;
do {
  let pointsStudent = r.question(`Geef de punten van student ${counter} `)
  counter++;
  if (pointsStudent != "") {

    if (Number(pointsStudent) < 10) {
      countFailed++
      pointsBook.push(Number(pointsStudent))
      totalSom = totalSom + Number(pointsStudent)
    }

  }
  else {
    keeprunning = false
  }



} while (keeprunning)

let average = totalSom / pointsBook.length
console.log(`Het gemiddelde van de punten is ${average}`)
console.log(`Het aantal studenten met een onvoldoende is ${countFailed}`)