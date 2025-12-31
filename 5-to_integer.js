// Write a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer:

// If the argument can’t be converted to an integer, print “Not a number”
// You must use console.log(...) to print all output
// You are not allowed to use var
// You are not allowed to use try/catch

const args = process.argv.slice(2)

if (args[0] && Number.isInteger(Number(args[0]))) {
    console.log(`My number: ${args[0]}`)
} else {
    console.log(`Not a number`)
}