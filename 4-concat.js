// Write a script that prints two arguments passed to it, in the following format: “ is ”

// You must use console.log(...) to print all output
// You are not allowed to use var

const args = process.argv.slice(2)

if (args[0] && args[1]) {
    console.log(`${args[0]} is ${args[1]}`)
} else if (args[0]) {
    console.log(`${args[0]} is undefined`)
} else{
    console.log(`undefined is undefined`)
}




