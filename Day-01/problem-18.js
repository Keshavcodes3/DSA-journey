let prompt = require("prompt-sync")();

let a = Number(prompt("Enter angle 1: "));
let b = Number(prompt("Enter angle 2: "));
let c = Number(prompt("Enter angle 3: "));

if (a > 0 && b > 0 && c > 0 && a + b + c === 180) {
  console.log("Valid Triangle");
} else {
  console.log("Invalid Triangle");
}
