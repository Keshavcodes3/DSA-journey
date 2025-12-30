let prompt = require("prompt-sync")();

let marks = Number(prompt("Enter marks: "));

if (marks >= 33) {
  console.log("Pass");
} else {
  console.log("Fail");
}
