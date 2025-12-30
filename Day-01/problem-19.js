let prompt = require("prompt-sync")();

let num = Number(prompt("Enter number: "));

if (num % 3 === 0 && num % 7 !== 0) {
  console.log("Divisible by 3 only");
} else if (num % 7 === 0 && num % 3 !== 0) {
  console.log("Divisible by 7 only");
} else {
  console.log("Invalid");
}
