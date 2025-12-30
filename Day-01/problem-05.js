let prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));

if (num % 5 === 0) {
  console.log("Divisible by 5");
} else {
  console.log("Not divisible by 5");
}
