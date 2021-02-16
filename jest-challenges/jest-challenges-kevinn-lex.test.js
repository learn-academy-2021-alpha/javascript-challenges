// 1. Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

test("when areTired is called with string of 'yes', return 'drink coffee'", () => {
  //Arrange
  const stringArr = "yes"

  //Act
  const actualResult = areTired(stringArr)

  //Assert
  expect(actualResult).toEqual("drink coffee")
})

test("when areTired is called with string of 'no', return 'keep working'", () => {
  //Arrange
  const stringArr = "no"

  //Act
  const actualResult = areTired(stringArr)

  //Assert
  expect(actualResult).toEqual("keep working")
})

const areTired = (string) => {
  if(string === 'yes'){
    return "drink coffee"
  } else if (string === 'no'){
    return "keep working"
  }
}

// Write the function that will make the test pass.
// 2. Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

fdescribe("when areStressed is called", () => {
  it("returns 'relax' when yes is called", () => {
    //Arrange
    const stringAr = "yes"

    //Act
    const actualResult = areStressed(stringAr)

    //Assert
    expect(actualResult).toEqual("relax")
  })

  it("returns 'keep going' when no is called", () => {
    //Arrange
    const stringAr = "no"

    //Act
    const actualResult = areStressed(stringAr)

    //Assert
    expect(actualResult).toEqual("keep going")
  })
})

const areStressed = (string) => {
  if(string === "yes"){
    return "relax"
  }else if(string === "no"){
    return "keep going"
  }
}

// Write the function that will make the test pass.
// 3. Write the test for a function that returns "in budget" if a price is lower than $300.

// Write the function that will make the test pass.
// 4. Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

// Write the function that will make the test pass.
// 5. Write the test for a function that takes in one argument(number) and returns whether the number is odd.

// Write the function that will make the test pass.
// 6. Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

// Write the function that will make the test pass.
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