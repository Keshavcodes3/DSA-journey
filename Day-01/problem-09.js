let prompt = require("prompt-sync")();

let year = Number(prompt("Enter year: "));

if (year % 4 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}
