// Write a function named marco that returns "polo".
// create a function that takes no argument named marco that gives us a return of "polo"

// const marco = () =>{
//     return "polo"
// }
// console.log(marco())

// // Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// // Create a function that takes in an argument and will return the prompt "Welcome , person's name"

// const greeting = (personsName) =>{
//     return `Welcome, ${personsName}`
// }
// console.log(greeting("Dave"))
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// Create a function that takes in a number as an argunent and returns the value odd or even
        // if the number is odd return a sentence that says " your number is odd"
        // if the number is even return a sentence that says "your number is even"
        // if the number is in neither or not a number "something went wrong"

// const oddOrEven = (yourNumber) => {
//     if (yourNumber%2 === 0){
//         return `${yourNumber} is even`
//     }
//     else if (yourNumber%2 === 1){
//         return `${yourNumber} is odd`
//     }
//     else{
//         return "Something went wrong"
//     }
// }
// console.log(oddOrEven(7))
// console.log(oddOrEven(12))
// console.log(oddOrEven("boom"))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// Create a function called triple with an argument and returns the argument multiplied by 3.

// const triple = (myNumber) => {
//     return (myNumber * 3)
// }
// console.log(triple(5))

// Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.
// Create a function named multiply that will take two arguments: multiple1, multiple2 
//returns multiple1 multiplied by multiple2

// const multiply = (multiple1 , multiple2) => {
//     return (multiple1 * multiple2)
// }
// console.log(multiply(42 , 2))


// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// create a function and call it divisibleBy that takes in two arguments: divisible1, divisible2
// if divisble1 is evenly divisible by the divisible2 return "divisible1 is evenly divisible by divisible2."
// if divisble1 is not evenly divisible by the divisible2 return "divisible1 is not evenly divisible by divisible2."
// else return "try again."

const divisibleBy = (divisible1, divisible2) => {
    if (divisible1 % divisible2 === 0){
        return `${divisible1} is evenly divisible by ${divisible2}.`
    } else if (divisible1 % divisible2 === 1){
        return `${divisible1} is not evenly divisible by ${divisible2}.`
    } else {
        return "try agian"
    }
}
console.log(divisibleBy("hey" , 5))


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.