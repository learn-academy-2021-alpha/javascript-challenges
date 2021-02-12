// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// const greeting = (personName) => {
//     return `welcome ${personName}`
// }
// console.log(greeting("guerrero"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// const oddOrEven = (number) => {
//     if (number % 2 === 0){
//         return "Your number is even!"
//     } else if (number % 2 === 1){
//         return "Your number is odd!"
//     }
// }

// console.log(oddOrEven(5))
// console.log(oddOrEven(8))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// const triple = (number) => {
//     return (number * 3)
// }

// console.log(triple(2))
// Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.

// const multiply =(number1, number2) => {
//     return (number1 * number2)
// }

// console.log(multiply(2, 3))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// we want a function named divisbleBy that will take two arguments
// we want to input two numbers
// we want a return where the first number is divisble by the second number

// const divisbleBy =(arg1,arg2) =>{
//     if (arg1%arg2 ===0) 
//     return `${arg1} is evenly divisble by ${arg2}`
// }

// console.log(divisbleBy(10,5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// write a function named assignedGrade that will take one argument
const assignGrade = (result) => {
    if (result <60){
        return"You Failed"
} else if (result >= 60 && result < 70) {
    return "you got a D"
} else if (result >= 70 && result < 80){
    return " you got a C"
} else if (result >=  80 && result < 90){
    return "you got a B"
} else if (result >= 90) {
    return "you got an A"
}
}

console.log(assignGrade(98))
// when we input a number
// it will return a letter grade

