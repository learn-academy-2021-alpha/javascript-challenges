// var numbers = [2, 4, 6, 8, 10]
// numbers.unshift(0)
// console.log(numbers)

// var letters = ["a", "p", ]

// Functions Challenges -------------------02-11-2021---------------------

// Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.

const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(6, 5))


// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibleBy = (num1, num2) => {
    if(num1 % num2 === 0){
        return `${num1} is evenly divisible by ${num2}`
    } else {
        return `${num1} is not evenly divisible by ${num2}`
    }
}
console.log(divisibleBy(35, 2))


// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

const triple = (number) => {
    return number * 3
}
console.log(triple(7))


// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

const oddOrEven = (number) => {
    if(number % 2 === 0){
        return "even"
    } else {
        return "odd"
    }
}
console.log(oddOrEven(10))


// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

const greeting = (name) => {
    return `Welcome, ${name}!`
}
console.log(greeting("Stephanie"))


// Write a function named marco that returns "polo".

const marco = () => {
    return "polo"
}
console.log(marco())


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

const assignGrade = (number) => {
    if(number <60){
        return "Youre letter grade is an F :("
    } else if(number >=60 && number < 70){
        return "Your letter grade is a D :/"
    } else if(number >= 70 && number < 80){
        return "Your letter grade is a C :p"
    } else if(number >= 80 && number < 90){
        return "Your letter grade is a B :)"
    } else if(number >= 90 && number <= 100){
        return "Your letter grade is an A yay!"
    }
}
console.log(assignGrade(80))