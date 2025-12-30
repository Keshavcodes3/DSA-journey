let prompt = require("prompt-sync")();

let ch = prompt("Enter a character: ");

if (ch >= "0" && ch <= "9") {
  console.log("Digit");
} else if (
  (ch >= "A" && ch <= "Z") ||
  (ch >= "a" && ch <= "z")
) {
  console.log("Alphabet");
} else {
  console.log("Special Character");
}
