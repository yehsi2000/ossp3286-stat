#!/usr/bin/env node

const lib = require("./lib");

if (process.argv.length <= 3) {
    console.log("Insufficient parameter!");
    process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n));

if (numbers.some(isNaN)) {
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

let result;

switch (command) {
    case "sum":
    case "avg":
    case "max":
    case "med":
    case "iqr":
    case "outlier":
        result = lib[command](numbers);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}
if(result.length>0)
    result.forEach(res=>console.log(res));
else if(result.length!=0)
    console.log(result);
