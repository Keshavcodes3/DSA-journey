let prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));

if (num % 3 === 0 && num % 5 === 0) {
  console.log("Divisible by 3 and 5");
} else {
  console.log("Not divisible");
}
