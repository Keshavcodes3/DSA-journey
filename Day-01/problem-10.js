let prompt = require("prompt-sync")();

let ch = prompt("Enter a character: ");

if (
  ch === "a" || ch === "e" || ch === "i" ||
  ch === "o" || ch === "u"
) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}
