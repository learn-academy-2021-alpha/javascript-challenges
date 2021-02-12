// Challenges
// DON'T FORGET TO PSEUDOCODE
//
// Write a function named marco that returns "polo".

//create a function that has no value
//returns "polo"
//console.log(function)
const marco = () => {
return "polo"
}
console.log(marco());

//
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

//make a function
//request an argument from user for name
//returns "welcome" with person's name

const greeting = (userName) => {
  return `Welcome ${userName}!`
}
console.log(greeting("Lex"));
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

//write a function named oddOrEven
//argument will be any given number by user
//inside function use if/else statement and modulus(%) to determine whether odd of even
//return string "odd" or "even" dependent on if/else statement
//console.log(function)

const oddOrEven = (userNum) => {
  if(userNum % 2 === 0){
    return "Even"
  } else if(userNum%2 === 1){
    return "Odd"
  } else{
    return "Oops something went wrong"
  }
}
console.log(oddOrEven(7));
console.log(oddOrEven(24));
console.log(oddOrEven(3.14));


// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

//create a function called triple
//user submits number as an argument
//multiply number by three in function and return result
//console.log(function)

// const triple = (multThree) => {
// let multiply = multThree*3;
//   return multiply
// }
// console.log(triple(3));

// Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.

//create a function named multiply
//user submits two arguments
//create a variable that multiplies two arguments together
//return value of variable
//console.log(function)

const multiply = (numOne,numTwo) => {
  let multResult = numOne*numTwo;
  return multResult
}
console.log(multiply(2,4));

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibleBy = (numThree, numFour) => {
  if(numThree%numFour === 0){
   return (`${numThree} is evenly divisible by ${numFour}`);
  }
}
console.log(divisibleBy(15, 5));
//
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

const assignGrade = (grade) => {
  if(grade === 100){
    "perfect score"
  } else if(grade >= 93 && grade < 100){
    return "A"
  }else if(grade >= 90 && grade < 93){
    return "A-"
  }else if(grade >= 87 && grade < 90){
    return "B+"
  }else if(grade >= 83 && grade < 87){
    return "B"
  }else if(grade >= 80 && grade < 83){
    return "B-"
  }else if(grade >= 76 && grade < 80){
    return "C+"
  }else if(grade >= 73 && grade < 76){
    return "C"
  }else if(grade >= 70 && grade < 73){
    return "C-"
  }else if(grade >= 60 && grade < 70){
    return "D"
  }else if(grade > 0 && grade < 67){
    return "F"
  }else if(grade === 0){
    return "no grade available"
  }
}
console.log(assignGrade(55));

// STRETCH Challenges
// Test your functions with multiple calls
//
// What number's bigger: Write a function named greaterNum that takes 2 arguments, both numbers and returns whichever number is the greater (higher) number
//
// The World Translator: Write a function named helloWorld that takes 1 argument, a language code (e.g. "es", "de", "en") and returns "Hello, World" for the given language, for at least 3 languages (it should default to returning English)
//
// The Pluralizer: Write a function named pluralizer that takes 2 arguments, a number and a singular noun and returns the number and pluralized form of the noun, if necessary
//
// const pluralizer = (5, cat)
//
// Expected outcome --> "5 cats"
//
// const pluralizer = (1, dog)
//
// Expected outcome --> "1 dog"
// Bonus: Make it handle a few collective nouns like "sheep", "goose", "child", "person" and "species"
