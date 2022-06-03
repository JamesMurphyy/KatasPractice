let prompt = require("prompt-sync")();
let attempts = 0;
let answer = Math.ceil(Math.random() * 100);
let guess;
// code below (replace this example)

while (guess !== answer) {
  console.log("Guess a answer between 1-100:");

  guess = prompt("> ");

  if (guess > answer) {
    attempts += 1;
    console.log("Too High!");
  } else if (guess < answer) {
    attempts += 1;
    console.log("Too Low!");
  } else if (isNaN(guess)) {
    attempts += 1;
    console.log("Not a number! Try again!");
  } else {
    attempts += 1;
    console.log(`You got it! You took ${attempts} attempts!`);
    break
  }
}
