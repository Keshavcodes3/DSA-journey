let prompt = require("prompt-sync")();

let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}
