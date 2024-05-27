const { manipulateArray } = require("./arrayManipulation");

const inputArray = [3, 1, 5, 2, 1, 4, 3];
const result = manipulateArray(inputArray);

console.log(`Input array: [${inputArray.join(", ")}]`);
console.log(`Sum of unique sorted array: ${result}`);
