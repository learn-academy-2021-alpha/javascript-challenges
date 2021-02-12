// Write a function named marco that returns "polo".

//setup funtion with no argument that retruns a sting of "polo"

// const marco = () =>{
//     return "Polo"
// }
// console.log(marco())

// // Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// set up funtion greeting with an argument and returns a string of "Welcon, <person's name here"!

// const greeting = (personsName) =>{
//     return `Welcome, ${personsName}`
// }



// console.log(greeting ("FERNANDO"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// setup function with argument takes an number and determeins if its even or onloadeddata.

// const evenOrOdd = (number) =>{
//     if (number % 2  === 0)
//     return "Even"
//     else if(number % 2 === 1)
//     return "odd"
// }
//
// console.log(evenOrOdd(3))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

//setup a function with an argument that takes one number and * 3
// const triple = (numOne)=>{
//   return (numOne * 3)
// }
// console.log(triple(5));

// Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.

//setup a function that takes two numbers * by eachother and returns results
// const multiply = (numOne , numTwo) => {
// return (numOne * numTwo)
// }
// console.log(multiply(5 , 5));
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

//set up a function that takes 2 number and retruns devision answer

// const divisibleBy =(num1 , num2) =>{
//     if (num1 % num2 === 0)
//     return `${num1} is evently divisible by ${num2}`
//     else if (num1 % num2 !== 0)
//     return `${num1} is not evently divisible by ${num2}`
//     else 
//   return "try again"
//     }


// console.log(divisibleBy(3422342349781234 , 28234))


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

//set upfunction that that uses a number score retruns a letter grade. 
//if statement to scale grade values
//log final grade


const assignGrade = (score) =>{
    if (score >= 90)
    return "You got an A"
    else if (score >= 80)
    return "You got an B"
    else if (score >= 70)
    return "You got an C"
    else if (score >= 60)
    return "You got an D"
    else if (score <= 50)
    return "You got an F"
    else
    "try again"
}

console.log(assignGrade(45))


