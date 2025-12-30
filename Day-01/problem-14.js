let prompt = require("prompt-sync")();

let ch = prompt("Enter a character: ");

if (ch >= "A" && ch <= "Z") {
  console.log("Uppercase");
} else if (ch >= "a" && ch <= "z") {
  console.log("Lowercase");
} else {
  console.log("Not an alphabet");
}
