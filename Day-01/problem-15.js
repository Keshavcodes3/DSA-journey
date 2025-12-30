let prompt = require("prompt-sync")();

let temp = Number(prompt("Enter temperature: "));

if (temp < 0) {
  console.log("Freezing");
} else if (temp <= 15) {
  console.log("Cold");
} else if (temp <= 30) {
  console.log("Moderate");
} else {
  console.log("Hot");
}
