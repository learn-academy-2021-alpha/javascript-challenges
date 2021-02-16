// 1. Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

const { expect } = require("@jest/globals")
const { describe } = require("yargs")

test("function returns 'drink coffee' if you are tired", () => {
    expect(areYouTired("yes")).toEqual("drink coffee")
})

test("function return 'keep working' if you are not tired", () => {
    expect(areYouTired("no")).toEqual("keep working")
})

// Write the function that will make the test pass.
// Create a function that takes in one argument on if the person is tired
const areYouTired = (tiredState) => {
    // Need if/else conditionals to check if the person is tired
    if (tiredState === "yes") {
        // Return 'drink coffee' if tired (case 1)
        return 'drink coffee';
    } else if (tiredState === "no") {
        // Return 'keep working' if not tired (case 2)
        return 'keep working';
    } else {
        return 'something went wrong'
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

test("function returns 'relax' if youre stressed", () => {
  expect(feelings("yes")).toEqual("relax")
})

test("function returns 'keep going' if not stressed", () => {
  expect(feelings("no")).toEqual("keep going")
})

const feelings = (stressLevel) => {
  //if/else feelings are stressed return relax
  if (stressLevel === "yes") {
  //return string of relax
 return "relax"
 } else if (stressLevel === "no") {
    //returns string of "keep going"
    return "keep going"
}
}

// 3. Write the test for a function that returns "in budget" if a price is lower than $300.
// describe("inBudget", () => {
    test ("returns 'in budget' if price is $200", () => {
        expect(inBudget(200)).toEqual("in budget");
    })
    test ("returns 'not in budget' if price is $400", () => {
        expect(inBudget(400)).toEqual("not in budget");
    })
// })

// Write a function that takes in 1 argument that is a number
const inBudget = (number) => {
    // If that number is lower than 300, return 'in budget'
    if (number < 300) {
        return 'in budget'
    } else if (number >= 300) {
        // Else if, then it is 'not in budget'
        return 'not in budget'
    }
}

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
test("returns the number 1 when comparing numbers 1 and 2", () => {
  expect(largerNum(1,2)).toEqual(1)

})
//function taking two arguments and returning lowest number
const largerNum = (numOne, numTwo) => {
  if (numOne > numTwo) {
    return numTwo
  }
  else if (numOne < numTwo) {
    return numOne

  } else if (numOne === numTwo) {
    return numOne
  }
}
