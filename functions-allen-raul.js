// Write a function named marco that returns "polo".
// Create a function named 'marco' that takes no arguments
// const marco = () => {
// Return a string "polo"
// 	return "polo";
// };
// console.log(marco());

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// create a function that takes an argument
// const greeting = (name) => {
// then it will return a string that says "Welcome,<person's name here>!"
// 	return `welcome, ${name}!`;
// };
// console.log(greeting("Raul"));

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// Create a function called 'oddOrEven' that takes 1 argument
const oddOrEven = (num) => {

    // Conditional check of whether it is odd or even

    // If it is odd
    if (num % 2 === 1) {
        // Return string 'odd'
        return 'odd'
    // Else if it is even
    } else if (num % 2 === 0) {
        // Return string 'even'
        return 'even'
    // Else
    } else {
        // Return 'try again'
        return 'try again'
    }
}

console.log( oddOrEven(1) );
console.log( oddOrEven(2) );
console.log( oddOrEven('tree') );


// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
