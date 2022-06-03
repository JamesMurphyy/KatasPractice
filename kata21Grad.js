let prompt = require("prompt-sync")();
let attempts = 0
let number = 42
// code below (replace this example)
let answer = prompt("Guess a number: ");
if (answer > number) {

  console.log("Too High!");

}