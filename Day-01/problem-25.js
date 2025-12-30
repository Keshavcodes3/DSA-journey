let prompt = require("prompt-sync")();

let salary = Number(prompt("Enter salary: "));
let years = Number(prompt("Enter years of service: "));

if (years >= 5) {
  console.log(salary * 0.10);
} else {
  console.log("No Bonus");
}
