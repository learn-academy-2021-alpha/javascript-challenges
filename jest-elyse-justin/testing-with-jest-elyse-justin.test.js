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

// not done !!!
// test("when inBudget is called with a number that is less than 300", () => {
//   //Arrange
//   const number = 300
//   //Act
//   const numResult = (number < 300)
//   //Assert
//   expect (numResult()).toEqual ("in budget")
// })

// Write the function that will make the test pass.


// //
// const inBudget = () => {
//   let number = i
//   if (number < 300) {
//     return "in budget"
//   }
// }


// 4. Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

test ( "when compareNum is called will take num1 and compare to num2", (a,b) => {
  const greaterValue = (a<b)
  expect(greaterValue).toEqual(a)
})

// Write the function that will make the test pass.

var smallNum = 3
var bigNum = 5

const compareNum = (a,b) =>{
  if ( smallNum< bigNum){
    return compareNum
  }
}


// 5. Write the test for a function that takes in one argument(number) and returns whether the number is odd.

// Write the function that will make the test pass.
// 6. Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

// describe ("when fruitDecider is called", () => {
//   it ("return 'yellow' if 'banana'", () => {
//     const fruit = "banana"
//     const fruitColor = fruitDecider(fruit)
//     expect(fruitColor).toEqual("yellow")
//   })
// })

// // Write the function that will make the test pass.
// var input = "banana"
// const fruitDecider = () => {
//   if (input = "banana")
//   return "yellow"
// }

// 7. Write the test for a function called rick that returns "Morty".

// Write the function that will make the test pass.


// 8. Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

// Write the function that will make the test pass.
// 9. Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even.

// Write the function that will make the test pass.
// 10. Write the test for a function called doubler that takes an number and returns the result of the number multiplied by 2.

// Write the function that will make the test pass.
// 11. Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

// Write the function that will make the test pass.
// 12. Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Write the function that will make the test pass.
// 13. Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.

// Write the function that will make the test pass.
