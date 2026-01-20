import *  as readline from 'readline-sync';
let weight: number = readline.questionFloat("Geef je gewicht in (in kg):\n");
let length: number = readline.questionFloat("Geef je lengte in (in m):\n");
let BMI = weight / (length * length)
console.log(`Je BMI is ${BMI}`)