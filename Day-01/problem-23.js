let prompt = require("prompt-sync")();

let time = Number(prompt("Enter hour: "));

if (time >= 5 && time <= 11) {
  console.log("Morning");
} else if (time >= 12 && time <= 16) {
  console.log("Afternoon");
} else if (time >= 17 && time <= 20) {
  console.log("Evening");
} else if (
  (time >= 21 && time <= 23) ||
  (time >= 0 && time <= 4)
) {
  console.log("Night");
} else {
  console.log("Invalid time");
}
