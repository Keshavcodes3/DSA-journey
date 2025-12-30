let prompt = require("prompt-sync")();

let marks = Number(prompt("Enter marks: "));

if (marks >= 90) {
  console.log("A");
} else if (marks >= 75) {
  console.log("B");
} else if (marks >= 50) {
  console.log("C");
} else {
  console.log("Fail");
}
