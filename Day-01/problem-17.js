let prompt = require("prompt-sync")();

let basic = Number(prompt("Enter basic salary: "));

let hra = basic * 0.20;
let da = basic * 0.50;
let total = basic + hra + da;

console.log("Total Salary:", total);
