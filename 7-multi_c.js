// Write a script that prints x times “C is fun”

// Where x is the first argument of the script
// If the first argument can’t be converted to an integer, print “Missing number of occurrences”
// You must use console.log(...) to print all output
// You are not allowed to use var
// You can use only two console.log
// You must use a loop (while, for, etc.)

const c = "C is fun"
const arg = process.argv[2]
if (Number.isInteger(Number(arg) && Number(arg))) {
    for (let i = 0; i < Number(arg); i++){
        console.log(c)
    }
} else if (!Number.isInteger(Number(arg))) {
    console.log("Missing number of occurences")
}