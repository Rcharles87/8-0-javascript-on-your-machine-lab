/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let operation = process.argv[2];
    let numbers = process.argv.slice(3);
    let sum = 0
    const add = (a, b) => a + b
    const subt = (a, b) => a - b
    let inputNum = numbers.map(Number)
   console.log(inputNum)
// check if there's an operation or not
    if (!operation) {
        return "No operation provided...";
// check if there are numbers present or not
// 0 = falsy
    } else if (!numbers.length) {
        return "No numbers provided...";
// check if operation is add, minus, or something else
    } else if (operation === "plus") {
        sum += inputNum.reduce(add);
        return sum;
    } else if (operation === "minus") {
        sum += inputNum.reduce(subt)
        return sum;
    } else {
        return `Invalid operation: ${operation}`;
    }
}

// Don't change anything below this line.
module.exports = calculator;
