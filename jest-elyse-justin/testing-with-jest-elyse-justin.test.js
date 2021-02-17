// 1. Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// describe("When areYouTired is called", () => {
//     it ("return 'drink coffee' if answer is 'yes'", ()=> {
//         const answer = "yes"
//         const actualResult = areYouTired(answer)
//         expect(actualResult).toEqual("drink coffee")
//     });
//     it ("return 'keep working' if answer is 'no'", () => {
//         const answer = "no"
//         const actualResult = areYouTired(answer)
//         expect(actualResult).toEqual("keep working")
//     });
// })

// // Write the function that will make the test pass.

// const areYouTired = (answer) => {
//     if (answer === "yes") {
//         return "drink coffee"
//     } else if (answer === "no")
//         return "keep working"
// }

// 2. Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// describe("When areYouStressed is called", () => {
//     it ("return 'relax' if answer is 'yes'", ()=> {
//         const answer1 = "yes"
//         const actualResult1 = areYouStressed(answer1)
//         expect(actualResult1).toEqual("relax")
//     });
//     it ("return 'keep going' if answer is 'no'", () => {
//         const answer1 = "no"
//         const actualResult1 = areYouStressed(answer1)
//         expect(actualResult1).toEqual("keep going")
//     });
// })

// // Write the function that will make the test pass.

// const areYouStressed = (answer1) => {
//     if (answer1 === "yes") {
//         return "relax"
//     } else if (answer1 === "no")
//         return "keep going"
// }

// 3. Write the test for a function that returns "in budget" if a price is lower than $300.

//   test("return 'in budget' if answer is 'below $300'", ()=> {
//         const trackingResult = budgetTracker(purchase)
//         expect(trackingResult).toEqual("in budget")
//     });

// var purchase = 250 // can use any number really

// const budgetTracker = (purchase) => {
//   if (purchase < 300)
//    return "in budget"
// }

// 4. Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
//
// describe( "when compareNum is called it will return the smaller number", () => {
//   it ( "when 'numA'is less than 'numB'", ()=> {
//     const smaller = numA
//     const digit = compareNum(smaller)
//     expect (digit).toEqual(smaller)
//   });
// });

// // // Write the function that will make the test pass.

// var numA = 65
// var numB = 70

// const compareNum = () => {
//   if (numA < numB) {
//     return numA
//   } 
// }


// 5. Write the test for a function that takes in one argument(number) and returns whether the number is odd.

// test ("When called 'oddFinder' will determine if 'numOdd' is odd", () => {
//   const numOdd = 9
//   const foundOdd = oddFinder(numOdd)
//   expect(foundOdd).toEqual("odd")
// });

// // Write the function that will make the test pass.
 
// var numeral = 9

// const oddFinder = () => {
//   if (numeral %2 !==0) {
//     return "odd"
//   }
//   return oddFinder
// }

// 6. Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

// describe ("when fruitDecider is called", () => {
//   it ("return 'banana' if 'yellow'", () => {
//     const fruit = "banana"
//     const fruitColor = fruitDecider(fruit)
//     expect(fruitColor).toEqual("yellow")
//    });
//   it ("return 'red' if 'apple'", () => {
//         const fruit = "apple"
//         const fruitColor = fruitDecider(fruit)
//         expect(fruitColor).toEqual("red")
//    });
//   it ("return 'purple' if 'grape'", () => {
//     const fruit = "grape"
//     const fruitColor = fruitDecider(fruit)
//     expect(fruitColor).toEqual("purple")
//     });
// });

// // // // Write the function that will make the test pass.

// const fruitDecider = (fruit) => {
//   if (fruit === "banana") {
//     return "yellow" 
//   } else if(fruit === "apple") {
//     return "red"
//   } else if(fruit === "grape") {
//     return "purple"
//   }
//   return fruitDecider
// }

// 7. Write the test for a function called rick that returns "Morty".

// test ("when rick is called return 'Morty'", () => {
//   expect(rick()).toEqual("Morty")
// })

// // Write the function that will make the test pass.

// const rick = () => {
//   return "Morty"
// }


// 8. Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

// test ("When 'greetings' it will return a greeting", () => {
//   expect(greetings()).toEqual("Hello ${name}")
// })

// // Write the function that will make the test pass.
// var name = "kobe"
// const greetings = () => {
//   return 'Hello ${name}'
// }
// 9. Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even.

// Write the function that will make the test pass.

// 10. Write the test for a function called doubler that takes an number and returns the result of the number multiplied by 2.

// test("When 'doubler' is activated it takes a 'number' and multiplies the number by two", () =>{
//   const result = doubler(number); // result will equal our value, aka number, applied to our function
//   expect (result).toEqual(number*2); // therefore, result is equal to our value, aka number, times two
// });

// // Write the function that will make the test pass.
// var number = Math.floor(Math.random()* 25) // random number generator up to 25 set var number
// const doubler = () => { // create function to multiply by two
//   return number*2
// }
// test should fail, but pass with function

// 11. Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

// simiilar to the previous question but I decided to set a value within our test to set values = number a multiplied by number b

// test("when function 'multiplyValues' is ran, return value 'A' times value 'B'", () => {
//   const values = (valueA * valueB)
//   const multipliedNumbers = multiplyValues(values)
//   expect (multipliedNumbers).toEqual(values)
// });
// // Write the function that will make the test pass.
// var valueA = Math.floor(Math.random()* 25)
// var valueB = Math.floor(Math.random()* 25)

// const multiplyValues = () => {
//   return valueA*valueB
// }

// 12. Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Write the function that will make the test pass.
// 13. Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.

// Write the function that will make the test pass.
