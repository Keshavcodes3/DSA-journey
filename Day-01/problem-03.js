let prompt = require("prompt-sync")();

let age = Number(prompt("Enter age: "));

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}
