let prompt = require("prompt-sync")();

let units = Number(prompt("Enter units: "));
let bill;

if (units <= 100) {
  bill = units * 1;
} else if (units <= 200) {
  bill = units * 2;
} else {
  bill = units * 3;
}

console.log("Bill:", bill);
