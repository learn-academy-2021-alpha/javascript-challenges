// IMPORTANT: Write the test FIRST, see it fail, then write the code to make it PASS.

// IMPORTANT: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// 1. Write the test for a function that returns "drink coffee" if you are tired and "keep going" if you are not tired.

describe("When areYouTired is called", () => {
    it("return 'drink coffee' when called with yes", () => {
    //Arrange 
    const argument = "yes";

    //Act
    const actualTired = areYouTired(argument);

    //Assert
    expect(actualTired).toEqual("drink coffee");
    })
    it("return 'keep going' when called with no", () => {
        //Arrange 
        const argument = "no";
    
        //Act
        const actualTired = areYouTired(argument);
    
        //Assert
        expect(actualTired).toEqual("keep going");
        })
})

//create a function called areYouTired
//takes in string as an argument

const areYouTired = (str) => {
    // if argument is yes return "drink coffee"
    if (str === 'yes') {
        return "drink coffee"
        //else return "keep going"
    } else {
        return "keep going"
    }
}

// Write the function that will make the test pass.
// 2. Write the test for a function that returns "relax" if you arelResulted and "keep going" if you are notlResulted.

 describe("When areYolResulted is called", () => {
    it("return 'relax' when called with yes", () => {
    //Arrange 
    const argument = "yes";

    //Act
    const actualResult = areYolResulted(argument);

    //Assert
    expect(actualResult).toEqual("relax");
    })
    it("return 'keep going' when called with no", () => {
        //Arrange 
        const argument = "no";
    
        //Act
        const actualResult = areYolResulted(argument);
    
        //Assert
        expect(actualResult).toEqual("keep going");
        })
})

//create a function called areYolResulted
//takes in string as an argument
const areYolResulted = (str) => {
    // if argument is yes return "relax"
    if (str === 'yes') {
        return "relax"
        //else return "keep going"
    } else {
        return "keep going"
    }
}


// Write the function that will make the test pass.
// 3. Write the test for a function that returns "in budget" if a price is lower than $300.

describe("When inBudget is called", () => {
    it("return 'in budget' when called with a number less than 300", () => {
        //Arrange 
        const argument = 32;

        //Act
        const actualResult = inBudget (argument);

        //Assert
        expect(actualResult).toEqual("in budget");
    })
    it("return 'too expensive' when called with a number greater than or equal to 300", () => {
        //Arrange 
        const argument = 305;
    
        //Act
        const actualResult = inBudget(argument);
    
        //Assert
        expect(actualResult).toEqual("too expensive");
    })
})

//write a function thats called inBudget
//takes in a number as an argument 
const inBudget = (numb) => {
    //if number is below 300 return "in budget"
    if (numb < 300) {
        return "in budget"
    //else return "too expensive"
    } else if (numb >= 300) {
        return "too expensive"
    }
}
// console.log(inBudget(32))


// Write the function that will make the test pass.
// 4. Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
describe("When smallNum is called", () => {
    it("returns the value with the smaller number", () => {
        //Arrange 
        const argument1 = 32;
        const argument2 = 302;

        //Act
        const actualResult = smallNum (argument1 , argument2 );

        //Assert
        expect(actualResult).toEqual(32);
    })
})
//write a function called smallNum
//takes in two number as an argument
const smallNum = (num1 , num2) => {
    //if num1 is less than num 2
    if (num1 < num2){
        //return num1
        return num1
    //Else return num 2
    }else {
        return num2
    }
}



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

// Write the function that will make the test pass