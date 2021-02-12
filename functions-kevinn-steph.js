// Write a function named marco that returns "polo".

// const marco = () => {
//   return 'Polo'
// }
// console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// const greeting = (name) => {
//   return `Welcome ${name}!`
// }
// console.log(greeting('Steph'))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// const oddOrEven = (number) => {
//   if(number % 2 === 0){
//     return 'Even'
//   } else {
//     return 'Odd'
//   }
// }
// console.log(oddOrEven(3))
// console.log(oddOrEven(4))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// const triple = (num) => {
//   return num * 3
// }
// console.log(triple(6))
// console.log(triple(18))

// Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.

// const multiply = (num1, num2) => {
//   return num1 * num2
// }
// console.log(multiply(2,4))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// const divisibleBy = (num1, num2) => {
//   if(num1 % num2 === 0){
//     return `${num1} is evenly divisible by ${num2}`
//   } else {
//     return `${num1} is not evenly divisible by ${num2}`
//   }
// }
// console.log(divisibleBy(10,5))
// console.log(divisibleBy(15,8))


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// const assignGrade = (num) => {
//   if(num < 60){
//     return 'You got an F'
//   } else if(num >= 60 && num < 70){
//     return 'You got a D'
//   } else if(num >= 70 && num < 80){
//     return 'You got a C'
//   } else if(num >= 80 && num < 90){
//     return 'You got a B'
//   } else if(num >= 90 && num <= 100){
//     return 'You got an A'
//   }
// }
// console.log(assignGrade(67))
// console.log(assignGrade(100))
// console.log(assignGrade(12))

// STRETCH Challenges
// Test your functions with multiple calls

// What number's bigger: Write a function named greaterNum that takes 2 arguments, both numbers and returns whichever number is the greater (higher) number

// const greaterNum = (num1, num2) => {
//   if(num1 > num2) {
//     return num1
//   } else if(num1 === num2){
//     return 'They\'re the same number'
//   } else {
//     return num2
//   }
// }

// console.log(greaterNum(12,89))
// console.log(greaterNum(100,89))
// console.log(greaterNum(89,89))

// The World Translator: Write a function named helloWorld that takes 1 argument, a language code (e.g. "es", "de", "en") and returns "Hello, World" for the given language, for at least 3 languages (it should default to returning English)

const helloWorld = (langCode) => {
  if(langCode === 'es'){
    return 'Hola Mundo'
  } else if(langCode = 'de'){
    return 'Hallo Welt'
  } 
}

// The Pluralizer: Write a function named pluralizer that takes 2 arguments, a number and a singular noun and returns the number and pluralized form of the noun, if necessary

// const pluralizer = (5, cat)

// Expected outcome --> "5 cats"

// const pluralizer = (1, dog)

// Expected outcome --> "1 dog"

// Bonus: Make it handle a few collective nouns like "sheep", "goose", "child", "person" and "species"